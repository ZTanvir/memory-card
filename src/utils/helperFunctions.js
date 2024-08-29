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

export { generateRandomNum, getRandomItem };
