//** === HTTP === Server === */
const http = require(`http`);

//*! ===  Request & Response / Server and Client === */
http.createServer(router).listen(3000);

function router(req, res) {
  console.log("New Request!");
  console.log(req.url);

  switch (req.url) {
    case "/hola":
      res.write(`Hello, World! What up?`);
      res.end();
      break;

    default:
      res.write("Error, 404! Not Exist!");
      res.end();
  }

  res.writeHead(201, { "Content-Type": "text/plain" });
  // === Write User Request
  /* res.write("Hello World! My First Server Request!");
    res.end(); */
}
