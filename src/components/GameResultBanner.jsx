import loserImg from "../assets/images/loserImg.jpeg";
import winnerImg from "../assets/images/winnerImg.png";
import styles from "../styles/gameResult.module.css";

const GameResultBanner = ({ result, handleRestartBtn }) => {
  return (
    <>
      <div className={styles.resultBanner}>
        <button
          className={styles.displayResult}
          style={
            result
              ? { backgroundColor: "#4b81d9" }
              : { backgroundColor: "#b9383c" }
          }
        >
          {result ? "You won" : "You lose"}
        </button>
        {result ? (
          <img
            src={winnerImg}
            alt="Ash celebrate after wining the tournament"
          />
        ) : (
          <img src={loserImg} alt="Sad Ash image as he lost the tournament" />
        )}
        <div
          className={styles.overLay}
          style={
            result
              ? { backgroundColor: "rgb(96, 132, 153)" }
              : { backgroundColor: "#6b3638" }
          }
        ></div>
        <button className={styles.restartBtn} onClick={handleRestartBtn}>
          Restart
        </button>
        <div
          className={styles.backgroundGradient}
          style={
            result
              ? {
                  backgroundImage: `linear-gradient(
    to bottom right,
    rgb(84, 183, 240),
    rgb(0, 132, 255)
  )`,
                }
              : {
                  backgroundImage: `linear-gradient(to bottom right, rgb(240, 84, 84), red)`,
                }
          }
        ></div>
      </div>
    </>
  );
};

export default GameResultBanner;
