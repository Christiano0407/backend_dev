const http = require("http");
const courses = require("./coursesUrl.js");
console.log(courses);
const PORT = 3000;

const server = http.createServer((req, res) => {
  //req.end("Hello World");
  const { method } = req;
});

server.listen(PORT, () => {
  console.log(`Listen on port http://localhost:${PORT}...`);
});
