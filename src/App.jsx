import "./App.css";
import AudioPlayManual from "./components/AudioPlayManual";
import GameInstruction from "./components/GameInstruction";
import HomeScreen from "./components/HomeScreen";
import PokemonLogo from "./components/PokemonLogo";
import mayPokemon from "./assets/video/maypokemon.mp4";
import clickingInterface from "./assets/audios/clickingInterfaceSelect.mp3";
import bgMusic from "./assets/audios/bgMusic.mp3";
import { useRef } from "react";

function App() {
  const interfaceMusic = useRef(null); //menu music

  const handhandleDifficultyBtn = (e) => {
    console.log(interfaceMusic);
    interfaceMusic.current.playAudio();
    console.log(e.target.dataset.value);
  };

  return (
    <>
      <header>
        <div className="logo">
          <PokemonLogo />
        </div>
      </header>
      <main className="homeScreen">
        <HomeScreen handhandleDifficultyBtn={handhandleDifficultyBtn} />
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
          />
          <AudioPlayManual
            ref={interfaceMusic}
            src={clickingInterface}
            playIcon={"volume_up"}
            pauseIcon={"volume_off"}
            playStatus={true}
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
