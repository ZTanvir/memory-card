import styles from "../styles/pokemonCard.module.css";
import pokemonCardBack from "../assets/images/pokemon_Trading_Card_Game_cardback.jpg";
import { useRef, useEffect, useState } from "react";

const PokemonCard = ({
  pokemonImg,
  cardName,
  handleClickCard,
  isShowCardBack,
}) => {
  const cardInnerElements = useRef(null);

  useEffect(() => {
    const id = setTimeout(() => {
      cardInnerElements.current.style.transform = "rotateY(0deg)";
    }, 500);
    return () => clearTimeout(id);
  }, []);

  return (
    <section
      data-cardname={cardName}
      className={styles.pokemonCard}
      onClick={handleClickCard}
    >
      <div
        ref={cardInnerElements}
        className={styles.cardInner}
        style={isShowCardBack ? { transform: "rotateY(180deg)" } : null}
      >
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
