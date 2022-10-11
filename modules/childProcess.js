const { exec } = require(`child_process`);

exec(`ls -la`, (err, stdout) => {
  if (err) {
    console.log(err);
    return false;
  }

  console.log(stdout);
});

// ===> 
exec(`node modules/console.js`, (error, stateOut) => {
  if (error) {
    console.log(error);
    return false;
  }

  console.log(stateOut);
});
