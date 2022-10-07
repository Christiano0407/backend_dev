const callback = (user) => {
  console.log(`I am a Callback and ${user}`);

  setTimeout(() => {
    console.log("I am a Callback Two");
  }, 1000);
};

console.log("Init Process");
callback("Chris");
console.log("Finished Process");

// ===

const oneSync = (myCallback) => {
  console.log("One Sync Init");

  setTimeout(() => {
    myCallback();
  }, 1000);
};

oneSync(function () {
  console.log("Finished MyCallback");
});
