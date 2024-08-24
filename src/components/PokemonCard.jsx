import styles from "../styles/pokemonCard.module.css";

const PokemonCard = ({ pokemonImg, cardName, handleClickCard }) => {
  return (
    <section className={styles.pokemonCard} onClick={handleClickCard}>
      <h2>{cardName}</h2>
      <img src={pokemonImg} alt={`${cardName} pokemon`} />
    </section>
  );
};
export default PokemonCard;
