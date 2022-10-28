//** === === === ===  Server Express === === === ===  */
const express = require(`express`);

const app = express();
const PORT = 3000;

app.get(`/`, (res, req) => {
  res.send("Hello World");
});

app.listen(PORT);
console.log(`Listen on port http://localhost:${PORT}...`);
