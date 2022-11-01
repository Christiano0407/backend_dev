//** === === Express Server Part Two === === */
const express = require(`express`);
//** === App & Call Require API*/
const app = express();
const { infoCourses } = require("../apiUrl/coursesUrl");
//console.log(infoCourses);
//** === PORT */
const PORT = process.env.PORT || 3000;
//** === Create Routers New */
const routingProgramming = express.Router();
app.use("/api/courses/programming", routingProgramming);
const routingMath = express.Router();
app.use("/api/courses/math", routingMath);
const routingDev = express.Router();
app.use("/api/courses/developer", routingDev);

//** === Call APP && Routing && Parameters Search URL (:) && Query Params (?) === */
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/api/courses", (req, res) => {
  res.send(JSON.stringify(infoCourses));
});

routingProgramming.get("/", (req, res) => {
  res.send(JSON.stringify(infoCourses.programming));
});

//*! === ADD Query Params */
routingProgramming.get("/:language", (req, res) => {
  const language = req.params.language;
  const result = infoCourses.programming.filter(
    (course) => course.language === language
  );

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

  const result = infoCourses.programming.filter(
    (course) => course.language === language && course.level === level
  );

  //*? === Not found */
  if (result.length === 0) {
    return res.status(404).send(`Sorry! Not Found${language} and ${level}`);
  }

  res.send(JSON.stringify(result));
});

routingMath.get("/", (req, res) => {
  res.send(JSON.stringify(infoCourses.math));
});

routingMath.get("/:theme", (req, res) => {
  const theme = req.params.theme;
  const result = infoCourses.math.filter(
    (courseMath) => courseMath.theme === theme
  );

  if (result.length === 0) {
    return res.status(404).send(`Sorry! Not Found${language}`);
  }

  res.send(JSON.stringify(result));
});

app.get("/api/courses/cloud", (req, res) => {
  res.send(JSON.stringify(infoCourses.cloud));
});
app.get("/api/courses/data", (req, res) => {
  res.send(JSON.stringify(infoCourses.data));
});
app.get("/api/courses/python", (req, res) => {
  res.send(JSON.stringify(infoCourses.python));
});
routingDev.get("/", (req, res) => {
  res.send(JSON.stringify(infoCourses.developer));
});

//** === === === PORT & Listen */
app.listen(PORT, () => {
  console.log(`Listen App in Port http://localhost:${PORT}...`);
});
