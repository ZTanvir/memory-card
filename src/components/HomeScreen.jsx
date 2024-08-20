import DifficultyBtn from "./DifficultyBtn";
import styles from "../styles/homeScreen.module.css";

const HomeScreen = ({ handhandleDifficultyBtn }) => {
  return (
    <section className={styles.homeScreenContainer}>
      <h2>Memory Game</h2>
      <div className={styles.allDifficultyBtn}>
        <DifficultyBtn text={"Easy"} handleBtn={handhandleDifficultyBtn} />
        <DifficultyBtn text={"Medium"} handleBtn={handhandleDifficultyBtn} />
        <DifficultyBtn text={"Hard"} handleBtn={handhandleDifficultyBtn} />
      </div>
    </section>
  );
};
export default HomeScreen;
