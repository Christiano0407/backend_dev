//*TODO === === === === Functions */
const hello = (name) => {
  return `Hello, my friend ${name}`;
};

const myGame = (game) => {
  return `My favorite game is: ${game}`;
};

const newComing = (coming) => {
  return `My new Coming:${coming}`;
};

//** === Modules Exports === as Object & normal module === === */
module.exports = {
  hello: hello,
  myGame: myGame,
  newComing: newComing,
};
/* module.exports.hello = hello;
module.exports.myGame = myGame; */
