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

//** === === === PORT & Listen */
app.listen(PORT, () => {
  console.log(`Listen App in Port http://localhost:${PORT}...`);
});
