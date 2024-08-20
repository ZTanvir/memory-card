import { useState } from "react";
import styles from "../styles/gameInstruction.module.css";
import pokemonMew from "../assets/images/pokemonMew.png";

const GameInstruction = ({ instructionList, audioDom }) => {
  const [isHideInstruction, setIsHideInstruction] = useState(true);

  const handleShowHide = (e) => {
    setIsHideInstruction(!isHideInstruction);
    audioDom.current.playAudio();
  };

  return (
    <>
      <div className={styles.instructionMsgSection}>
        {isHideInstruction ? null : (
          <div className={styles.instructionMsgSectionContainer}>
            <ul className={styles.instructionMessage}>
              {Boolean(Object.values(instructionList).length > 0)
                ? !isHideInstruction
                  ? Object.values(instructionList).map((item) => (
                      <li key={crypto.randomUUID()}>{item}</li>
                    ))
                  : null
                : null}
            </ul>
            <img
              className={styles.instructionImg}
              src={pokemonMew}
              alt="pokemon character Meowth"
            />
          </div>
        )}
      </div>

      <button className={styles.instructionMsgBtn} onClick={handleShowHide}>
        <span className="material-symbols-outlined">
          {isHideInstruction ? "question_mark" : "close"}
        </span>
      </button>
    </>
  );
};
export default GameInstruction;
