//** === 3) Example === */
const fs = require(`fs`);

//** ===> Add "Sync" < archive */

/* fs.readFileSync(__dirname + `./fileSystem.html`, `utf-8`, (err, container) => {
  if (err) {
    console.log(err);
  } else {
    console.log(container);
  }
}); */
//** === Rename Other File ===  */
/* fs.renameSync("./fileSystem.html", "file.html", (error) => {
  if (error) {
    throw error;
  } else {
    console.log("File New");
  }
});
 */
//** === Add Content on File ===  */
/* fs.appendFileSync("./fileSystem.html", "<p>Hello</p>", (error) => {
  if (error) {
    throw error;
  } else {
    console.log("File and Text New");
  }
}); */
//** === Eliminated Archive ==> fs.unlink("archive") <== === */
