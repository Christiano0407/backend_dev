//** === === === === === EventEmitter (Class) === === === === === ===   */
const EventEmitter = require(`events`);
//*! === Return a Class */
console.log(EventEmitter);

//*! === === === ===  Work Event Module === === === ===  */
//*? === Methods & Event "Buy" ===  */
const productNew = new EventEmitter();
productNew.on("buy", (total) => {
  console.log(`Buy a New Product of $${total} Dollars`);
});
productNew.emit(`buy`, 500);
//console.log(productNew);
const productNewTwo = new EventEmitter();
productNewTwo.on("create", (product, numProduct) => {
  console.log(`She is create a new product ${product}`);
  console.log(`All new Product for Buy ${numProduct}`);
});
productNewTwo.emit(`create`, `VideoGame with 3D`, `BattleBomb`);
