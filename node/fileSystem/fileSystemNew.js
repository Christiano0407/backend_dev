//** === 3) Example === */
const fs = require(`fs`);

/* fs.readFile(__dirname + `./fileSystem.html`, `utf-8`, (err, container) => {
  if (err) {
    console.log(err);
  } else {
    console.log(container);
  }
}); */
//** === Rename Other File ===  */
fs.rename("fileSystem.html", "file.html", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File New");
  }
});
