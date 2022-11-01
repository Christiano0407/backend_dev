//** === === Express Server Part Two === === */
const express = require(`express`);
//** === App & Call Require API*/
const app = express();
const { infoCourses } = require("./dataAPI/data.js");
const routingProgramming = require("./routers/programming.js");
const routingMath = require("./routers/math.js");
//console.log(infoCourses);
//** === PORT */
const PORT = process.env.PORT || 3000;
//** === Create Routers New */
app.use("/api/courses/programming", routingProgramming);
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

routingDev.get("/basic", (req, res) => {
  res.send(JSON.stringify(infoCourses.developer[0].basic));
});

routingDev.get("/basic/:language", (req, res) => {
  const language = req.params.language;
  const result = infoCourses.developer[0].basic.filter(
    (course) => course.language === language
  );

  if (result.length === 0) {
    return res.status(404).send(`Sorry! Not Found ${language}. Thank you.`);
  }

  //*? Query Parameter === */
  if (req.query.level === "Basic") {
    return res.send(JSON.stringify(result));
  }

  res.send(JSON.stringify(result));
});

routingDev.get("/medium", (req, res) => {
  res.send(JSON.stringify(infoCourses.developer[1].medium));
});

routingDev.get("expert", (req, res) => {
  res.send(JSON.stringify(infoCourses.developer[2].expert));
});

//** === === === PORT & Listen */
app.listen(PORT, () => {
  console.log(`Listen App in Port http://localhost:${PORT}...`);
});
