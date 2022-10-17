const sharp = require(`sharp`);

/* sharp("imageOne.jpg")
  .resize(250, 250)
  .toFile(`resized.jpeg`, (err, info) => {
    console.log(info);
  }); */

/* async function getMetadata() {
    try {
      const metadata = await sharp("imageOne.jpg").metadata();
      console.log(metadata);
    } catch (error) {
      console.log(`An error occurred during processing: ${error}`);
    }
  }

  getMetadata(); */

async function resizeImage() {
  try {
    await sharp("./utiles/imageOne.jpg")
      .resize({
        width: 150,
        height: 100,
      })
      .toFile("./utiles/resizedPlus.jpg");
  } catch (error) {
    console.log(error);
  }
}

resizeImage();
