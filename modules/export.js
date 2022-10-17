//** === === Export === === */

const helloModule = (name) => {
  return console.log(`Hello Module ${name}`);
};

module.exports = {
  helloModule: helloModule,
};
