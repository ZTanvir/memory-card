import styles from "../styles/pokemonCard.module.css";
import pokemonCardBack from "../assets/images/pokemon_Trading_Card_Game_cardback.jpg";
import flipCardAudioFile from "../assets/audios/flipcardAudio.mp3";
import { useRef, useEffect } from "react";

const PokemonCard = ({ pokemonImg, cardName, handleClickCard }) => {
  const cardInnerElements = useRef(null);
  const flipCardAudioEl = useRef(null);

  useEffect(() => {
    const id = setTimeout(() => {
      cardInnerElements.current.style.transform = "rotateY(0deg)";
      flipCardAudioEl.current.volume = 0.2;
      flipCardAudioEl.current.play();
    }, 500);

    return () => clearTimeout(id);
  }, []);

  return (
    <section
      data-cardname={cardName}
      className={styles.pokemonCard}
      onClick={handleClickCard}
    >
      <audio
        ref={flipCardAudioEl}
        className={styles.flipCardAudio}
        src={flipCardAudioFile}
      ></audio>
      <div ref={cardInnerElements} className={styles.cardInner}>
        <div className={styles.cardFront}>
          <img src={pokemonImg} alt={`${cardName} pokemon image}`} />
          <h2>{cardName}</h2>
        </div>
        <div className={styles.glassBackground}></div>
        <div
          className={styles.cardBack}
          style={{ background: `url(${pokemonCardBack}) no-repeat center` }}
        ></div>
      </div>
    </section>
  );
};
export default PokemonCard;
