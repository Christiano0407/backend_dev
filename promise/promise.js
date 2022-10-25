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

const resolvePromises = (result) => {
  console.log(result);
};

const rejectPromises = (error) => {
  console.log(error);
};

myPromise.then(resolvePromises).catch(rejectPromises);

//** === === === === Exercise PIZZA === === === ===   */
const statusPizza = () => {
  return Math.random() < 0.8;
};

const callPizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (statusPizza()) {
      resolve("Pizza, on this moment!!");
    } else {
      reject("Sorry!! Not Pizza!");
    }
  }, 2000);
});

const truePizza = (messageValue) => {
  console.log(messageValue);
};
const falsePizza = (messageError) => {
  console.log(messageError);
};

callPizza.then(truePizza).catch(falsePizza);
