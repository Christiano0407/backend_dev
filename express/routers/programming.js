//** === === === Programming Routers Import & Export === === ===  */
const express = require(`express`);
const routingProgramming = express.Router();

const { programming } = require("../dataAPI/data.js").infoCourses;
//*! ===> KEY: Replace infoCourses For programming <=== */

//** === === ===  Call Programming === === ===  */
routingProgramming.get("/", (req, res) => {
  res.send(JSON.stringify(programming));
});

//*! === ADD Query Params */
routingProgramming.get("/:language", (req, res) => {
  const language = req.params.language;
  const result = programming.filter((course) => course.language === language);

  //*? Not Found */
  if (result.length === 0) {
    return res.status(404).send(`Sorry! Not Found${language} and ${level}`);
  }

  //*? Query Params */
  if (req.query.order === "views") {
    return res.send(JSON.stringify(result.sort((a, b) => a.views - b.views)));
  }

  res.send(JSON.stringify(result));
});

//*! === Add Parameter URL */
routingProgramming.get("/:language/:level", (req, res) => {
  const language = req.params.language;
  const level = req.params.level;

  const result = programming.filter(
    (course) => course.language === language && course.level === level
  );

  //*? === Not found */
  if (result.length === 0) {
    return res.status(404).send(`Sorry! Not Found${language} and ${level}`);
  }

  res.send(JSON.stringify(result));
});

//** ==> EXPORT <== && Different Forms Export */
//module.exports.routingProgramming = routingProgramming;

module.exports = routingProgramming;
