import "./App.css";
import Audio from "./components/Audio";
import mayPokemon from "./assets/video/maypokemon.mp4";
import bgMusic from "./assets/audios/bgMusic.mp3";

function App() {
  return (
    <>
      <main className="homeScreen">
        {/* <video
          className="bgVideo"
          src={mayPokemon}
          autoPlay={true}
          muted={true}
          loop={true}
        /> */}
      </main>
      <footer>
        <div className="gameBgMusic">
          {/* <Audio src={bgMusic} controls={true} autoplay={true} /> */}
        </div>
        <div className="gameInstruction"></div>
      </footer>
    </>
  );
}

export default App;
