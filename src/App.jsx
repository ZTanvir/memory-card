import "./App.css";
import AudioPlayManual from "./components/AudioPlayManual";
import GameInstruction from "./components/GameInstruction";
import HomeScreen from "./components/HomeScreen";
import PokemonLogo from "./components/PokemonLogo";
import * as pokemonService from "./services/pokemonapi";
import { generateRandomNum, shuffleCard } from "../src/utils/helperFunctions";
import LoadingSceen from "./components/LoadingScreen";
import GameScreen from "./components/GameScreen";
import mayPokemon from "./assets/video/maypokemon.mp4";
import clickingInterface from "./assets/audios/clickingInterfaceSelect.mp3";
import bgMusic from "./assets/audios/bgMusic.mp3";
import { useEffect, useRef, useState } from "react";

function App() {
  const [screen, setScreen] = useState("loading");
  const [pokemonData, setPokemonData] = useState([]);
  const interfaceMusic = useRef(null); //menu music

  const handleDifficultyBtn = (e) => {
    interfaceMusic.current.playAudio();
    setScreen(e.target.dataset.value.toLowerCase());
  };

  const handleClickLogo = () => {
    setScreen("home");
  };
  // shuffle pokemon cards so
  // user get new initial cards every time when they restart
  const initialCardData = (allCards = []) => {
    const shuffleCardData = shuffleCard(allCards);
    if (screen === "easy") {
      return shuffleCardData.slice(0, 3);
    } else if (screen === "medium") {
      return shuffleCardData.slice(0, 4);
    } else if (screen === "hard") {
      return shuffleCardData.slice(0, 5);
    }
  };

  useEffect(() => {
    const getPokemon = async (pokemonId) => {
      const result = await pokemonService.getSiglePokemon(pokemonId);
      const { id, name } = result;
      const img = result.sprites.other.dream_world.front_default;
      return { id, name, img };
    };

    let listOfRequest = [];
    // get random 10 pokemons data
    for (let i = 0; i < 10; i++) {
      listOfRequest.push(getPokemon(generateRandomNum()));
    }

    const getPokemonsData = async () => {
      try {
        const result = await Promise.all(listOfRequest);
        setPokemonData([...result]);
        setTimeout(() => {
          setScreen("home");
        }, 5000);
      } catch (err) {
        console.error("Error while getting pokemons data", err);
      }
    };
    getPokemonsData();
  }, []);

  return (
    <>
      {screen === "home" && (
        <header>
          <div className="logo">
            <PokemonLogo />
          </div>
        </header>
      )}
      <main className="homeScreen">
        {screen === "loading" && <LoadingSceen />}
        {screen === "home" && pokemonData && (
          <HomeScreen handhandleDifficultyBtn={handleDifficultyBtn} />
        )}
        {screen === "easy" && (
          <GameScreen
            pokemonsData={pokemonData}
            initalPokemonsData={initialCardData(pokemonData)}
            totalRound={5}
            handleClickLogo={handleClickLogo}
            level={"easy"}
            cardClickMusic={interfaceMusic}
          />
        )}
        {screen === "medium" && (
          <GameScreen
            pokemonsData={pokemonData}
            initalPokemonsData={initialCardData(pokemonData)}
            totalRound={7}
            handleClickLogo={handleClickLogo}
            level={"medium"}
            cardClickMusic={interfaceMusic}
          />
        )}
        {screen === "hard" && (
          <GameScreen
            pokemonsData={pokemonData}
            initalPokemonsData={initialCardData(pokemonData)}
            totalRound={9}
            handleClickLogo={handleClickLogo}
            level={"hard"}
            cardClickMusic={interfaceMusic}
          />
        )}
      </main>
      <div className="overlay"></div>
      <video
        className="bgVideo"
        src={mayPokemon}
        autoPlay={true}
        muted={true}
        loop={true}
      />
      <footer>
        <div className="gameBgMusic">
          <AudioPlayManual
            src={bgMusic}
            playIcon={"music_note"}
            pauseIcon={"music_off"}
            playStatus={false}
            audioLoop={true}
          />
          <AudioPlayManual
            ref={interfaceMusic}
            src={clickingInterface}
            playIcon={"volume_up"}
            pauseIcon={"volume_off"}
            playStatus={true}
            audioLoop={false}
          />
        </div>
        <div className="gameInstruction">
          <GameInstruction
            instructionList={{
              1: "Don't click on the same card twice!",
              2: "Click on the POKEMON logo to go back.",
            }}
            audioDom={interfaceMusic}
          />
        </div>
      </footer>
    </>
  );
}

export default App;
