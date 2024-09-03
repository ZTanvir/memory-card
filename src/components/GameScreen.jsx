import { useState } from "react";
import PokemonCard from "./PokemonCard";
import GameResultBanner from "./GameResultBanner";
import { getRandomItem, shuffleCard } from "../utils/helperFunctions";
import styles from "../styles/gameScreen.module.css";

const GameScreen = ({
  pokemonsData,
  initalPokemonsData,
  totalRound,
  level,
  handleRestartBtn,
}) => {
  const [displayCard, setDisplayCard] = useState(initalPokemonsData);
  const [selectedCard, setSelectedCard] = useState([]);
  const [currentRound, setCurrentRound] = useState(1);
  const [gameResult, setGameResult] = useState("playing");

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

    const distinctiveCard = cardList.filter(
      (card) => !boardCards.map((bcard) => bcard.name).includes(card.name)
    );

    return distinctiveCard;
  };

  const checkGameResult = (pickCards = [], currentPickCard) => {
    console.log(pickCards, currentPickCard);

    const checkDuplicateCard = pickCards
      .map((card) => card.name)
      .includes(currentPickCard);

    if (checkDuplicateCard) {
      return "lose";
    } else if (!checkDuplicateCard && currentRound >= totalRound) {
      return "won";
    } else if (!checkDuplicateCard && currentRound <= totalRound) {
      return "playing";
    }
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

    // check game result
    const roundResult = checkGameResult(selectedCard, selectedCardName);
    if (roundResult === "won") {
      setGameResult("won");
    } else if (roundResult === "lose") {
      setGameResult("lose");
    }
    setSelectedCard([...allSelectedCard]);
    setDisplayCard([...shuffleAllThreeCard]);
    setCurrentRound(currentRound + 1);
  };
  return (
    <div className={styles.gameScreenContainer}>
      <div className={styles.cardBoard}>
        {pokemonsData.length > 0 && gameResult == "playing" ? (
          displayCard.map((card) => (
            <PokemonCard
              key={card.id}
              pokemonImg={card.img}
              cardName={card.name}
              handleClickCard={handleCard}
            />
          ))
        ) : (
          <div className="resultMessage">
            <GameResultBanner
              result={gameResult === "won"}
              handleRestartBtn={handleRestartBtn}
            />
          </div>
        )}
      </div>
      {gameResult === "playing" && (
        <div>
          <span>{currentRound}</span>/<span>{totalRound}</span>
        </div>
      )}
    </div>
  );
};
export default GameScreen;
