//** === === Express Server Part Two === === */
const express = require(`express`);
const app = express();
const PORT = 3000;

//** === Call APP === */
app.get("/", (req, res) => {
  res.send("Hello World");
});

//** === === === PORT */
app.listen(PORT);
console.log(`Listen App in Port http://localhost:${PORT}`);
