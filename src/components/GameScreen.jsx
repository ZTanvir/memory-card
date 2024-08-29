import { useState } from "react";
import PokemonCard from "./PokemonCard";
import { getRandomItem } from "../utils/helperFunctions";

const GameScreen = ({ pokemonsData, initalPokemonsData, totalRound }) => {
  const [displayCard, setDisplayCard] = useState(initalPokemonsData);
  const [selectedCard, setSelectedCard] = useState([]);

  const unSelectCard = (allCards, selectCard) => {
    const cardsList = allCards.filter(
      // return card that are not selected
      (deck) => !selectCard.map((item) => item.name).includes(deck.name)
    );
    return cardsList;
  };
  // shuffle card using fisher yates shuffle algorithm
  const shuffleCard = (cardList) => {
    const copyItems = [...cardList];
    for (let i = copyItems.length - 1; i >= 0; i--) {
      const randomNum = Math.floor(Math.random() * copyItems.length);
      if (copyItems[randomNum] !== copyItems[i]) {
        let temp = copyItems[randomNum];
        copyItems[randomNum] = copyItems[i];
        copyItems[i] = temp;
      }
    }
    return copyItems;
  };

  const handleCard = (e) => {
    const selectedCardName = e.currentTarget.dataset.cardname;
    const selectedCardData = pokemonsData.find(
      (data) => data.name === selectedCardName
    );
    const allSelectedCard = [...selectedCard, selectedCardData];
    const notSelectedCard = unSelectCard(pokemonsData, allSelectedCard);
    const newDisplayCard = [
      getRandomItem(notSelectedCard),
      getRandomItem(allSelectedCard),
      getRandomItem(pokemonsData),
    ];
    const newDisplayCards = shuffleCard(newDisplayCard);

    console.log("Shuffle card", newDisplayCard, "card", newDisplayCards);

    setSelectedCard([...allSelectedCard]);
    setDisplayCard([...newDisplayCards]);
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
