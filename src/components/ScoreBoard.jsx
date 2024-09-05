import { useEffect, useState } from "react";
import styles from "../styles/scoreBoard.module.css";
const ScoreBoard = ({ score, lvl }) => {
  const [highScore, setHighScore] = useState(
    window.localStorage.getItem(`appPokemon${lvl}Score`)
  );

  useEffect(() => {
    if (highScore === null) {
      window.localStorage.setItem(`appPokemon${lvl}Score`, 0);
      setHighScore(0);
    } else if (score > highScore) {
      window.localStorage.setItem(`appPokemon${lvl}Score`, score);
      setHighScore(score);
    }
  });

  return (
    <div className={styles.scoreBoardContainer}>
      <p>Score: {score}</p>
      <p>Best score: {highScore ? highScore : 0}</p>
      <div className={styles.glowBackground}></div>
    </div>
  );
};
export default ScoreBoard;
