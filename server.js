//** === Server Express ===  */
const express = require(`express`);

const app = express();

app.get(`/`, (res, req) => {
  res.send("Hello World");
});

app.listen(3000);
console.log("Server Is running on port 3000");
