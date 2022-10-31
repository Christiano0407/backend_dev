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
app.use(`/api/courses/programming`, routingProgramming);

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
  if (req.query.order === "view") {
    return res.send(JSON.stringify(result.sort((a, b) => a.view - b.view)));
  }

  res.send(JSON.stringify(result));
});

//*! === Add Parameter URL */
routingProgramming.get(`/:language/:level`, (req, res) => {
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

app.get("/api/courses/math", (req, res) => {
  res.send(JSON.stringify(infoCourses.math));
});

app.get("/api/courses/math/:theme", (req, res) => {
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
app.get("/api/courses/developer", (req, res) => {
  res.send(JSON.stringify(infoCourses.developer));
});

app.get("/api/courses/developer/:language", (req, res) => {
  const language = req.params.language;
  const results = infoCourses.developer.filter(
    (devCourse) => devCourse.language === language
  );

  if (results.length === 0) {
    return res.status(404).send(`Sorry! Not Found${language}`);
  }

  res.send(JSON.stringify(results));
});

//** === === === PORT & Listen */
app.listen(PORT, () => {
  console.log(`Listen App in Port http://localhost:${PORT}...`);
});
