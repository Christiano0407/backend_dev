//** === === JSON Project === ===  */
//*! === > Call With  Server / Servidores => Require < ===  */

const courseJson = require("./course.json");

console.log(courseJson);
console.log(typeof courseJson);
//** === Call Json */
console.log(courseJson.title);
console.log(courseJson.numViews);
console.log(courseJson.numLikes);
console.log(courseJson.themes[0]);
console.log(courseJson.themes[1]);
console.log(courseJson.themes[2]);
console.log(courseJson.city.newCity);
console.log(courseJson.city.cityMx);
console.log(courseJson.city.cityGd);
console.log(courseJson.city.cityOfWorld.England);
console.log(courseJson.city.cityOfWorld.EUA);
console.log(courseJson.city.cityOfWorld.EUA.NY);
console.log(courseJson.videoGames);
console.log(courseJson.videoGames[3]);
console.log(courseJson.videoGames[4][0]);
console.log(courseJson.videoGames[4][1]);
