//** === === === Stream ==>  Data Consumer === File System === */

const fs = require("fs");

let data = " ";

let readAbleStream = fs.createReadStream(__dirname + `/input.txt`);

readAbleStream.setEncoding(`UTF8`);
readAbleStream.on(`data`, function (chunk) {
  //console.log(chunk);
  //console.log(chunk.toString());
  data += chunk;
});

readAbleStream.on("end", function () {
  console.log(data);
});
