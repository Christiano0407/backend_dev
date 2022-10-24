//** === === === === Promises === === === === */
const promiseComplete = true;

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promiseComplete) {
      resolve("Good!");
    } else {
      reject("Sorry");
    }
  }, 2000);
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
