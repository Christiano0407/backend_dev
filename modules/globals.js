//** === Modules Globals ===  */

let i = 0;
let intervals = setInterval(() => {
  console.log("Globals");
  if (i === 3) {
    clearInterval(intervals);
  }
  i++;
}, 1000);

//** === Directory */
console.log(__dirname);
