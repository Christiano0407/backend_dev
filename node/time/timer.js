//** === Time => setTimeout(), setInterval(), setInmediate() ===  */

//*! ===  1 sec ==> 1000 ms ===  */

//*! === setTimeout(funcion, retraso/time, argumento) === 1 vez cada tiempo estipulado ===  */
//*! === setTimeout(funcion, retraso/time, argumento1, argumento2) ===  */

console.log("Right Now!!");
const newCourse = (course) => {
  console.log(`I am studying this new course ${course}`);
};

setTimeout(newCourse, 1000, `Node.js`);
setTimeout(newCourse, 2000, "ExpressJs");
setTimeout(() => {
  console.log("New Function");
}, 3000);

//*? === setInterval() === setInterval(code, delay) */
//*? === setInterval() === setInterval(func, delay, arg0, arg1, /* … ,*/ argN) */

const intervalHero = (hero) => {
  setInterval(() => {
    console.log(`My hero ${hero}`);
  }, 1000);
};

//intervalHero("Wolverine");

setInterval(
  (movie) => {
    console.log(`New Movie ${movie}`);
  },
  1000,
  "Thor"
);
