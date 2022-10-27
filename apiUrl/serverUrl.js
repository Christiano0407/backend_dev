const http = require(`http`);
const PORT = 300;

const server = http.createServer((req, res) => {
  req.end("Hello World");
});

server.listen(PORT, () => {
  console.log(`Listen on port http://localhost:${PORT}...`);
});
