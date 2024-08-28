import { useState } from "react";
import PokemonCard from "./PokemonCard";

const GameScreen = ({ pokemonsData, initalPokemonsData, totalRound }) => {
  const [displayCard, setDisplayCard] = useState(initalPokemonsData);
  const [selectedCard, setSelectedCard] = useState([]);

  const unSelectCard = (allCards, selectCard) => {
    const cardsList = allCards.filter(
      // return card that are not selected
      (deck) => !selectCard.includes(deck.name)
    );
    return cardsList;
  };

  const handleCard = (e) => {
    const selectedCardName = e.currentTarget.dataset.cardname;
    const allSelectedCard = [...selectedCard, selectedCardName];
    console.log("allselectedcard:", allSelectedCard);
    console.log(
      "card not selected",
      unSelectCard(pokemonsData, allSelectedCard)
    );
    setSelectedCard([...allSelectedCard]);
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {pokemonsData.length > 0
        ? displayCard.map((card) => (
            <PokemonCard
              key={card.id}
              pokemonImg={card.img}
              cardName={card.name}
              handleClickCard={handleCard}
            />
          ))
        : null}
      <div>{totalRound}</div>
    </div>
  );
};
export default GameScreen;
