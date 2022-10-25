//** > === === === === ===  Async & Await === === === === === < */
const productOrder = (product) => {
  return new Promise((resolve, reject) => {
    console.log(`Order a new ${product} and enjoy`);
    setTimeout(() => {
      if (product === `PlayStation`) {
        resolve(`This is a new Product! It is Awesome!`);
      }
      if (product !== `PlayStation`) {
        reject(`Very sorry!! We have not more PlayStation`);
      }
    }, 1000);
  });
};

//** >> === === Async and Await === === << */
const asyncProduct = async () => {};
