//** ===  === === > Modules Require == Import < === === ===  */
//*TODO === === ===  Modules === */
/* import { hello } from "./modules/hello.js"; */
const helloFriend = require("./modules/hello.js");

//*! === Call Modules ===  */
console.log(helloFriend);
console.log(helloFriend.hello("Luisa"));
console.log(helloFriend.myGame("Zelda"));
