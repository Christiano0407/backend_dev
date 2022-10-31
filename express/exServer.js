//** === === Express Server Part Two === === */
const express = require(`express`);
const app = express();

const { infoCourses } = require("../apiUrl/coursesUrl");
console.log(infoCourses);
const PORT = process.env.PORT || 3000;

//** === Call APP & Routing === */
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.get("/api/courses", (req, res) => {
  res.send(JSON.stringify(infoCourses));
});

app.get("/api/courses/programming", (req, res) => {
  res.send(JSON.stringify(infoCourses.programming));
});
//** === === === PORT & Listen */
app.listen(PORT, () => {
  console.log(`Listen App in Port http://localhost:${PORT}...`);
});
