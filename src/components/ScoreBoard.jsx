import styles from "../styles/scoreBoard.module.css";
const ScoreBoard = ({}) => {
  return (
    <div className={styles.scoreBoardContainer}>
      <p>Score: 0</p>
      <p>Best score: 0</p>
      <div className={styles.glowBackground}></div>
    </div>
  );
};
export default ScoreBoard;
