//** === Process === */
//console.log(process);
//*! === on ===  */
/* process.on(`beforeExit`, () => {
  console.log("Process will ending");
}); */
/* 
process.on("exit", () => {
  console.log("Process, ending!!");
}); */

//*! === error ===  */
/* process.on(`uncaughtException`, (err, origin) => {
  console.error("We have an error!!");
  console.error(err);
}); */

//*! === env == Environment === */
//console.log(process.env);

//*! === argv === */
//console.log(process.argv);

//*! === MemoryUsage() ===  */
console.log(process.memoryUsage());
