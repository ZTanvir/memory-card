import { useState } from "react";
import PokemonCard from "./PokemonCard";
import GameResultBanner from "./GameResultBanner";
import { getRandomItem } from "../utils/helperFunctions";

const GameScreen = ({ pokemonsData, initalPokemonsData, totalRound }) => {
  const [displayCard, setDisplayCard] = useState(initalPokemonsData);
  const [selectedCard, setSelectedCard] = useState([]);

  const unSelectCard = (allCards = [], selectCard) => {
    const cardsList = allCards.filter(
      // return card that are not selected
      (deck) => !selectCard.map((item) => item.name).includes(deck.name)
    );
    return cardsList;
  };
  // return a card which is not in already in display
  const uniqueCard = (cardList = [], boardCard = []) => {
    let boardCards = [...boardCard];

    console.log("inside unique card function:");
    console.log(cardList, boardCard);

    const distinctiveCard = cardList.filter(
      (card) => !boardCards.map((bcard) => bcard.name).includes(card.name)
    );
    console.log("unique card", distinctiveCard);

    return distinctiveCard;
  };

  // shuffle card using fisher yates shuffle algorithm
  const shuffleCard = (cardList = []) => {
    const copyItems = [...cardList];
    // O(n)
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
    const firstTwoCards = [
      getRandomItem(notSelectedCard),
      getRandomItem(allSelectedCard),
    ];
    const thirdCard = getRandomItem(
      uniqueCard(notSelectedCard, [...firstTwoCards])
    );
    const allThreeCard = firstTwoCards.concat(thirdCard);
    const shuffleAllThreeCard = shuffleCard(allThreeCard);

    setSelectedCard([...allSelectedCard]);
    setDisplayCard([...shuffleAllThreeCard]);
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {/* {pokemonsData.length > 0
        ? displayCard.map((card) => (
            <PokemonCard
              key={card.id}
              pokemonImg={card.img}
              cardName={card.name}
              handleClickCard={handleCard}
            />
          ))
        : null} */}
      <div>{totalRound}</div>
      <div>
        <GameResultBanner result={false} />
      </div>
    </div>
  );
};
export default GameScreen;
