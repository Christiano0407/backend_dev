//** === FS => File System === */
const fs = require(`fs`).promises;

(async function (path) {
  try {
    await fs.unlink(path);
    console.log(`successfully deleted ${path}`);
  } catch (error) {
    console.log("We have an Error", error.message);
  }
})(__dirname + `./archivo.txt`);
//exports.leer = leer;
//leer("./archivo.txt");

// ==== Other Example ===
const fs = require(`fs`).promises;

const redFile = async() => {
    try { 
   /*  const file = await fs.redFile(__dirname + "./archivo.txt", {encoding: `utf-8`});
    console.log(file); */

    const data = await fs.redFile(__dirname + "./archivo.txt");
    return data.toString();
    }
    catch(error) {
        console.log("We have an Error", error.message);
    }
}