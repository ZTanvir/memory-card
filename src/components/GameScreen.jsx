import PokemonCard from "./PokemonCard";
const GameScreen = ({ pokemonsData }) => {
  console.log(pokemonsData);

  const handleCard = () => {};
  return (
    <>
      {pokemonsData.length > 0 ? (
        <PokemonCard
          pokemonImg={pokemonsData[0].img}
          cardName={pokemonsData[0].name}
          handleClickCard={handleCard}
        />
      ) : null}
    </>
  );
};
export default GameScreen;
