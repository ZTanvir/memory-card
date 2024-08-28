import styles from "../styles/pokemonCard.module.css";
import pokemonCardBack from "../assets/images/pokemon_Trading_Card_Game_cardback.jpg";

const PokemonCard = ({ pokemonImg, cardName, handleClickCard }) => {
  return (
    <section
      data-cardname={cardName}
      className={styles.pokemonCard}
      onClick={handleClickCard}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <img src={pokemonImg} alt="" />
          <h2>{cardName}</h2>
        </div>
        <div
          className={styles.cardBack}
          style={{ background: `url(${pokemonCardBack}) no-repeat center` }}
        ></div>
      </div>
    </section>
  );
};
export default PokemonCard;
