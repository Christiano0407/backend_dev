//** === Process === */
process.on(`beforeExit`, () => {
  console.log("Process will ending");
});

process.on("exit", () => {
  console.log("Process, ending!!");
});

//> Error ==>
process.on(`uncaughtException`, (err, origin) => {
  console.error("We have an error!!");
  console.error(err);
});
