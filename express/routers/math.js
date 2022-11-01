//** === === === Math Routers Import & Export === === ===  */
const express = require(`express`);
const routingMath = express.Router();

const { math } = require("../dataAPI/data.js");

//** ===> */
routingMath.get("/", (req, res) => {
  res.send(JSON.stringify(math));
});

routingMath.get("/:theme", (req, res) => {
  const theme = req.params.theme;
  const result = math.filter((courseMath) => courseMath.theme === theme);

  if (result.length === 0) {
    return res.status(404).send(`Sorry! Not Found${language}`);
  }

  res.send(JSON.stringify(result));
});
