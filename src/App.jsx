import "./App.css";
import mayPokemon from "./assets/video/maypokemon.mp4";

function App() {
  return (
    <>
      <main className="homeScreen">
        <video
          className="bgVideo"
          src={mayPokemon}
          autoPlay={true}
          muted={true}
          loop={true}
        />
      </main>
      );
    </>
  );
}

export default App;
