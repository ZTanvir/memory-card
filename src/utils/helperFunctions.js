// generate random number between 1 to 500
const generateRandomNum = () => {
  return Math.floor(Math.random() * 500 + 1);
};
//  generate random number between 0 to array length -1 (both included)
const getRandomItem = (itemList) => {
  const size = itemList.length;
  const randomNum = Math.floor(Math.random() * size);
  return itemList[randomNum];
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

export { generateRandomNum, getRandomItem, shuffleCard };
