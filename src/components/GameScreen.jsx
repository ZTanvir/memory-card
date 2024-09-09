import { useState } from "react";
import PokemonCard from "./PokemonCard";
import PokemonLogo from "./PokemonLogo";
import GameResultBanner from "./GameResultBanner";
import ScoreBoard from "./ScoreBoard";
import { getRandomItem, shuffleCard } from "../utils/helperFunctions";
import styles from "../styles/gameScreen.module.css";

const GameScreen = ({
  pokemonsData,
  initalPokemonsData,
  totalRound,
  level,
  handleClickLogo,
  cardClickMusic,
}) => {
  const [displayCard, setDisplayCard] = useState(initalPokemonsData);
  const [selectedCard, setSelectedCard] = useState([]);
  const [currentRound, setCurrentRound] = useState(1);
  const [gameResult, setGameResult] = useState("playing");
  const [score, setScore] = useState(0);

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

  const getEachBoardCards = (
    allSelectedCard = [],
    notSelectedCard = [],
    lvl
  ) => {
    if (lvl === "easy") {
      const firstTwoCards = [
        getRandomItem(notSelectedCard),
        getRandomItem(allSelectedCard),
      ];
      const thirdCard = getRandomItem(
        uniqueCard(notSelectedCard, [...firstTwoCards])
      );
      const allThreeCards = firstTwoCards.concat(thirdCard);
      return allThreeCards;
    } else if (lvl === "medium") {
      if (currentRound === 1) {
        const firstTwoCards = [
          getRandomItem(notSelectedCard),
          getRandomItem(allSelectedCard),
        ];
        const thirdCard = getRandomItem(
          uniqueCard(notSelectedCard, [...firstTwoCards])
        );
        const allThreeCards = firstTwoCards.concat(thirdCard);
        const forthCard = getRandomItem(
          uniqueCard(notSelectedCard, [...allThreeCards])
        );
        const allFourCards = allThreeCards.concat(forthCard);
        return allFourCards;
      } else if (currentRound >= 2) {
        const firstTwoCards = [
          getRandomItem(notSelectedCard),
          getRandomItem(allSelectedCard),
        ];
        const thirdCard = getRandomItem(
          uniqueCard(notSelectedCard, [...firstTwoCards])
        );
        const allThreeCards = firstTwoCards.concat(thirdCard);
        const forthCard = getRandomItem(
          uniqueCard(allSelectedCard, [...allThreeCards])
        );
        const allFourCards = allThreeCards.concat(forthCard);
        return allFourCards;
      }
    } else if (lvl === "hard") {
      if (currentRound === 1) {
        const firstTwoCards = [
          getRandomItem(notSelectedCard),
          getRandomItem(allSelectedCard),
        ];
        const thirdCard = getRandomItem(
          uniqueCard(notSelectedCard, [...firstTwoCards])
        );
        const allThreeCards = firstTwoCards.concat(thirdCard);

        const forthCard = getRandomItem(
          uniqueCard(notSelectedCard, [...allThreeCards])
        );
        const allFourCards = allThreeCards.concat(forthCard);
        const fifthCard = getRandomItem(
          uniqueCard(notSelectedCard, [...allFourCards])
        );
        const allFiveCard = allFourCards.concat(fifthCard);
        return allFiveCard;
      } else if (currentRound === 2) {
        const firstTwoCards = [
          getRandomItem(notSelectedCard),
          getRandomItem(allSelectedCard),
        ];

        const thirdCard = getRandomItem(
          uniqueCard(notSelectedCard, [...firstTwoCards])
        );
        const allThreeCards = firstTwoCards.concat(thirdCard);
        const forthCard = getRandomItem(
          uniqueCard(allSelectedCard, [...allThreeCards])
        );
        const allFourCards = allThreeCards.concat(forthCard);
        const fifthCard = getRandomItem(
          uniqueCard(notSelectedCard, [...allFourCards])
        );
        const allFiveCard = allFourCards.concat(fifthCard);
        return allFiveCard;
      } else if (currentRound >= 3) {
        const firstTwoCards = [
          getRandomItem(notSelectedCard),
          getRandomItem(allSelectedCard),
        ];
        const thirdCard = getRandomItem(
          uniqueCard(notSelectedCard, [...firstTwoCards])
        );
        const allThreeCards = firstTwoCards.concat(thirdCard);
        const forthCard = getRandomItem(
          uniqueCard(allSelectedCard, [...allThreeCards])
        );
        const allFourCards = allThreeCards.concat(forthCard);
        const fifthCard = getRandomItem(
          uniqueCard(allSelectedCard, [...allFourCards])
        );
        const allFiveCard = allFourCards.concat(fifthCard);
        return allFiveCard;
      }
    }
  };

  const handleCard = (e) => {
    cardClickMusic.current.playAudio();
    const selectedCardName = e.currentTarget.dataset.cardname;
    // check game result
    const roundResult = checkGameResult(selectedCard, selectedCardName);
    if (roundResult === "won") {
      setScore(score + 1);
      setGameResult("won");
      return;
    } else if (roundResult === "lose") {
      setGameResult("lose");
      return;
    } else if (roundResult === "playing") {
      const selectedCardData = pokemonsData.find(
        (data) => data.name === selectedCardName
      );
      const allSelectedCard = [...selectedCard, selectedCardData];
      const notSelectedCard = unSelectCard(pokemonsData, allSelectedCard);

      const boardCards = getEachBoardCards(
        allSelectedCard,
        notSelectedCard,
        level
      );
      const shuffleBoardCards = shuffleCard(boardCards);
      // update states
      setScore(score + 1);
      setSelectedCard([...allSelectedCard]);
      setDisplayCard([...shuffleBoardCards]);
      setCurrentRound(currentRound + 1);
    }
  };

  const handleRestartBtn = () => {
    const totalInitialCard = displayCard.length;
    // initial card on board when restart
    setDisplayCard(shuffleCard(pokemonsData).slice(0, totalInitialCard));
    setSelectedCard([]);
    setCurrentRound(1);
    setScore(0);
    setGameResult("playing");
  };

  return (
    <div className={styles.gameScreenContainer}>
      <div className={styles.gameScreenHeader}>
        <div onClick={handleClickLogo} className={styles.gameLogo}>
          <PokemonLogo />
        </div>
        <ScoreBoard score={score} lvl={level} />
      </div>
      <div className={styles.cardBoardContainer}>
        <div className={styles.cardBoard}>
          {pokemonsData.length > 0 && gameResult == "playing" ? (
            displayCard.map((card) => (
              <PokemonCard
                key={card.id}
                pokemonImg={card.img}
                cardName={card.name}
                handleClickCard={handleCard}
                isShowCardBack={true}
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
          <div className={styles.gameRoundContainer}>
            <span>{currentRound}</span> / <span>{totalRound}</span>
          </div>
        )}
      </div>
    </div>
  );
};
export default GameScreen;
