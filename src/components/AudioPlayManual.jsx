import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import styles from "../styles/audioStyles.module.css";

const AudioPlayManual = forwardRef(
  ({ src, playIcon, pauseIcon, playStatus }, ref) => {
    const [isPlaying, setIsPlaying] = useState(playStatus);
    const audioEl = useRef(null);

    useImperativeHandle(ref, () => {
      return {
        playAudio() {
          audioEl.current.volume = 0.5;
          audioEl.current.play();
        },
        pauseAudio() {
          audioEl.current.pause();
        },
      };
    });

    const handlePlayPauseBtn = () => {
      const playStatus = !isPlaying;
      playStatus ? audioEl.current.play() : audioEl.current.pause();
      audioEl.current.volume = 0.5;
      setIsPlaying(!isPlaying);
    };

    return (
      <div className={styles.audioPlayer}>
        <audio ref={audioEl} id="audio">
          <source src={src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div className="controls">
          <button onClick={handlePlayPauseBtn} id={styles.playPauseBtn}>
            {isPlaying ? (
              <span className="material-symbols-outlined">{playIcon}</span>
            ) : (
              <span className="material-symbols-outlined">{pauseIcon}</span>
            )}
          </button>
        </div>
      </div>
    );
  }
);
export default AudioPlayManual;
