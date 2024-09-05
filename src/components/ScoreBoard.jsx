import styles from "../styles/scoreBoard.module.css";
const ScoreBoard = ({ score }) => {
  return (
    <div className={styles.scoreBoardContainer}>
      <p>Score: {score}</p>
      <p>Best score: 0</p>
      <div className={styles.glowBackground}></div>
    </div>
  );
};
export default ScoreBoard;
