const http = require("http");
const courses = require("./coursesUrl.js");
console.log(courses);
const PORT = 3000;

const server = http.createServer((req, res) => {
  //req.end("Hello World");
  const { method } = req;

  if (method === "GET") {
    return requestGet(req, res);
  } else {
    console.log(`Method not found with server ${method}`);
  }
});

const requestGet = (req, res) => {
  const path = req.url;

  if (path === "/") {
    res.statusCode = 200;
    res.end(`Welcome,to my first Server and API, create with Node.js`);
  }

  if (path === "/courses") {
    res.statusCode = 200;
    res.end(JSON.stringify(courses.infoCourses));
  }

  if (path === "/courses/programming") {
    res.statusCode = 200;
    res.end(JSON.stringify(courses.infoCourses.programming));
  }

  if (path === "/courses/math") {
    res.statusCode = 200;
    res.end(JSON.stringify(courses.infoCourses.math));
  }

  if (path === "/courses/cloud") {
    res.statusCode = 200;
    res.end(JSON.stringify(courses.infoCourses.cloud));
  }

  res.statusCode = 404;
  res.end("Sorry! Web & Resource Not Found...");
};

server.listen(PORT, () => {
  console.log(`Listen on port http://localhost:${PORT}...`);
});
