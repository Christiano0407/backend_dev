//** === === === Bcrypt === === === Hash === === ===  */

const bcrypt = require(`bcrypt`);

const password = "0407Travel_Manchester";

bcrypt.hash(password, 5, function (error, hash) {
  console.log(hash);

  bcrypt.compare(password, hash, function (error, res) {
    // console.log(error);
    console.log(res);
  });
});
