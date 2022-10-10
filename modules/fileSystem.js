//** === FS => File System === */
const fs = require(`fs`).promises;

(async function (path) {
  try {
    await fs.unlink(path);
    console.log(`successfully deleted ${path}`);
  } catch (error) {
    console.log("We have an Error", error.message);
  }
})(`/modules/archivo.txt`);
//exports.leer = leer;
//leer("./archivo.txt");
