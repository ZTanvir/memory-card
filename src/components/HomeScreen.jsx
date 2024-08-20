import DifficultyBtn from "./DifficultyBtn";
import PokemonLogo from "./PokemonLogo";
import styles from "../styles/homeScreen.module.css";

const HomeScreen = ({ handleDifficultyBtn }) => {
  return (
    <section className={styles.homeScreenContainer}>
      <h2>Memory Game</h2>
      <div className={styles.allDifficultyBtn}>
        <DifficultyBtn text={"Easy"} handleBtn={handleDifficultyBtn} />
        <DifficultyBtn text={"Medium"} handleBtn={handleDifficultyBtn} />
        <DifficultyBtn text={"Hard"} handleBtn={handleDifficultyBtn} />
      </div>
    </section>
  );
};
export default HomeScreen;
