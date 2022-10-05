//*TODO === === === === Functions */
const hello = (name) => {
  return `Hello, my friend ${name}`;
};

const myGame = (game) => {
  return `My favorite game is: ${game}`;
};

//** === Modules Exports ===  */
module.exports = {
  hello: hello,
  myGame: myGame,
};
/* module.exports.hello = hello;
module.exports.myGame = myGame; */
