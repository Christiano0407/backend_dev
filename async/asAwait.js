//** === === Async & Await => Try and Catch === ===  */
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

/* friends("Mauricio")
  .then((friend) => console.log(`He will forever be my best friend ${friend}`))
  .catch((err) => console.log(err)); */

const myNewFriend = async (girl) => {
  console.log(`She is my new friendGirl${girl}`);
};

//*! === Async and Await  */
const asyncFunction = async () => {
  try {
    const response = await friends("Mauricio");
    console.log(response);
    const newFriends = await myNewFriend(" Natalia");
    console.log(newFriends);
  } catch (err) {
    console.log(err);
  }
};

asyncFunction();
