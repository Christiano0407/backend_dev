//** === === === Sever With HTTP === === === */
const http = require(`http`);
//*! === === Port */
const PORT = 3000;
//*! === === Create Server */
const server = http.createServer((req, res) => {
  res.end(`Hello, World!!`);
});
//*! === === Call Port */
server.listen(PORT, () => {
  console.log(`Listen on port http://localhost:${PORT}`);
});
