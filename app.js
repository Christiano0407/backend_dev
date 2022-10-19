//** ===  === === > Modules Require == Import < === === ===  */
//*TODO === === ===  Modules === */
//const helloFriend = require("./modules/hello.js");
// => { } == Destructure Syntax.
const { hello, myGame, newComing } = require("./modules/hello.js");
//import { call } from "./modules/call.js";

//*! === Call Modules ===  */
//console.log(helloFriend);
/* console.log(helloFriend.hello("Luisa"));
console.log(helloFriend.myGame("Zelda")); */
console.log(hello("Luisa"));
console.log(myGame("Zelda"));
console.log(newComing("In Technology"));
//console.log(call("Madre"));
