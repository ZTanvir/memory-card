import styles from "../styles/audioStyles.module.css";

const Audio = ({ src }) => {
  return (
    <div className={styles.audioPlayer}>
      <audio id="audio">
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="controls">
        <button id={styles.playPause}></button>
      </div>
    </div>
  );
};
export default Audio;
