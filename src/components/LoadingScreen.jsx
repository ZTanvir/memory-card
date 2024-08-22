import styles from "../styles/loadingScreen.module.css";
import pokeball from "../assets/images/pokeball.png";
import { useEffect, useState } from "react";
const LoadingSceen = () => {
  const [dot, setDot] = useState("");
  let addDot = ``;

  useEffect(() => {
    const id = setInterval(() => {
      addDot += `.`;
      setDot(addDot);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className={styles.loadinScreenContainer}>
      <img className={styles.pokeball} src={pokeball} alt="" />
      <p>Loading {dot}</p>
    </div>
  );
};
export default LoadingSceen;
