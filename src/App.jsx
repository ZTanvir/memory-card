import "./App.css";
import AudioPlayManual from "./components/AudioPlayManual";
import GameInstruction from "./components/GameInstruction";
import mayPokemon from "./assets/video/maypokemon.mp4";
import clickingInterface from "./assets/audios/clickingInterfaceSelect.mp3";
import bgMusic from "./assets/audios/bgMusic.mp3";
import { useRef } from "react";

function App() {
  const interfaceMusic = useRef(null); //menu music

  return (
    <>
      <main className="homeScreen">
        <h1>Pokemon</h1>
        <h2>Memory Game</h2>
        <div className="levelBtn">
          <button
            onClick={() => {
              interfaceMusic.current.playAudio();
            }}
          >
            Easy
          </button>
          <button>Medium</button>
          <button>Hard</button>
        </div>
      </main>
      {/* <video
        className="bgVideo"
        src={mayPokemon}
        autoPlay={true}
        muted={true}
        loop={true}
      /> */}
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
