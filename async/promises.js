//** === Promises */
/* const hello = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hello, my name is ${name}`);
      resolve(name);
    }, 1000);
  });
};

hello("Gala")
  .then((name) => console.log("Juliette"))
  .catch((err) => console.log("We have an error")); */

//*! === */

/* const peoples = (people) => {
  return new Promise((resolve, reject) => {
    resolve(people);
    reject(error);
  });
};

peoples()
  .then((people) => console.log("Alma"))
  .catch((err) => console.log("error"));
 */
//*! ===  */
/* const friends = (friend) => {
  return new Promise((resolve, reject) => {
    console.log(`First Friend: ${friend}`);
    setTimeout(() => {
      resolve(friend);
    }, 1000);
    console.log("Other friends come in half hour");
  });
};

friends("Mauricio")
  .then((friend) => console.log(`He will forever be my best friend ${friend}`))
  .catch((err) => console.log("Not my friend")); */

//*! === */
const friends = (friend) => {
  return new Promise((resolve, reject) => {
    console.log(`First Friend: ${friend}`);

    true
      ? setTimeout(() => {
          resolve(friend);
        }, 1000)
      : reject(new Error("Not my friend"));

    console.log("Other friends come in half hour");
  });
};

friends("Mauricio")
  .then((friend) => console.log(`He will forever be my best friend ${friend}`))
  .catch((err) => console.log(err));
