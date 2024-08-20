import styles from "../styles/difficultyBtn.module.css";

const DifficultyBtn = ({ text, handleBtn }) => {
  return (
    <button
      data-value={text}
      className={styles.difficultyBtn}
      onClick={handleBtn}
    >
      {text}
    </button>
  );
};
export default DifficultyBtn;
