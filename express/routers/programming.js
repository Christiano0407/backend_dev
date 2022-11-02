//** === === === Programming Routers Import & Export === === ===  */
const express = require(`express`);
const routingProgramming = express.Router();

const { programming } = require("../dataAPI/data.js").infoCourses;
//*! ===> KEY: Replace infoCourses For programming <=== */

//** === Middleware ==> Call Method POST <== Processing === */
routingProgramming.use(express.json());

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

//** ==> Different Methods With Router <== */

//** === POST === */
routingProgramming.post("/", (req, res) => {
  let newCoursePro = req.body;
  programming.push(newCoursePro);
  res.send(JSON.stringify(programming));
});

//** === PUT ==> Update Complete ===  */
routingProgramming.put(`/:id`, (req, res) => {
  const updateCoursePro = req.body;
  const id = req.params.id;
  const index = programming.findIndex((course) => course.id == id);

  if (index >= 0) {
    programming[index] = updateCoursePro;
  }

  res.send(JSON.stringify(programming));
});
//*? ==> Patch = HTTP */
routingProgramming.patch("/:id", (req, res) => {
  const updateInfoCourse = req.body;
  const id = req.params.id;

  const index = programming.findIndex((course) => course.id == id);

  if (index >= 0) {
    const courseModifier = programming[index];
    Object.assign(courseModifier, updateInfoCourse);
  }

  res.send(JSON.stringify(programming));
});

//** ==> EXPORT <== && Different Forms Export */
//module.exports.routingProgramming = routingProgramming;
module.exports = routingProgramming;
