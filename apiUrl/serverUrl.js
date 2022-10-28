const http = require("http");
const courses = require("./coursesUrl.js");
// 2) const {infoCourses} = require("./coursesUrl");
console.log(courses);
const PORT = 3000;

const server = http.createServer((req, res) => {
  //req.end("Hello World");
  const { method } = req;
  // 2) const method = req.method;

  if (method === "GET") {
    return requestGet(req, res);
  } else {
    res.statusCode = 501;
    console.log(`Method not found with server ${method}`);
  }

  if (method === "POST") {
    return methodPost(req, res);
  } else {
    console.log(`Method not found with server ${method}`);
  }
});
//** === GET */
//** ===> status 200 >> Default === */
const requestGet = (req, res) => {
  const path = req.url;

  if (path === "/") {
    //res.statusCode = 200;
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    return res.end(`Welcome,to my first Server and API, create with Node.js`);
  }

  if (path === "/courses") {
    res.statusCode = 200;
    return res.end(JSON.stringify(courses.infoCourses));
  }

  if (path === "/courses/programming") {
    res.statusCode = 200;
    return res.end(JSON.stringify(courses.infoCourses.programming));
  }

  if (path === "/courses/math") {
    res.statusCode = 200;
    return res.end(JSON.stringify(courses.infoCourses.math));
  }

  if (path === "/courses/cloud") {
    res.statusCode = 200;
    return res.end(JSON.stringify(courses.infoCourses.cloud));
  }

  res.statusCode = 404;
  return res.end("Sorry! Web & Resource Not Found...");
};
//** === POST */
const methodPost = (req, res) => {
  const path = req.url;
  if (path === "/courses/programming") {
    res.statusCode = 200;
    return res.end("Server add new request POST courses/programming");
  }
};

server.listen(PORT, () => {
  console.log(`Listen on port http://localhost:${PORT}...`);
});

/*  if (path === `/courses/programming/?id=${id}`) {
    res.statusCode = 200;
    res.end(JSON.stringify(courses.infoCourses.programming[0].id));
  } */
