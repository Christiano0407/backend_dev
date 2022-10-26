//** === === === Sever With HTTP === === === */
const http = require(`http`);
//*! === === Port */
const PORT = 3000;
//*! === === Create Server */
const server = http.createServer((req, res) => {
  /*   console.log(req.url); */
  /* console.log(req.method); */
  /* console.log(req.headers); */
  res.end(`Hello, World!!`);
  console.log(res.statusCode);
  res.setHeader(`content-type`, `application/json`);
  console.log(res.getHeader);
});
//*! === === Call Port */
server.listen(PORT, () => {
  console.log(`Listen on port http://localhost:${PORT}...`);
});
