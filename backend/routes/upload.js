const router = require("express").Router();
const store = require("../multer");
const fs = require("fs");

router.post("/upload", store.array("image"), (req, res) => {
  const files = req.files;
  const cat = req.body.category;

  if (!files) {
    const error = new Error("Please choose files");
    error.httpStatusCode = 400;
    //res.status(400).send(error.message)
    return error;
  }
  let imageArray = files.map((file) => {
    let img = fs.readFileSync(file.path);

    return (encoded_image = img.toString("base64"));
  });
  let result = imageArray.map((src, index) => {
    let finalImage = {
      filename: files[index].originalname,
      contentType: files[index].mimetype,
      imageBase64: src,
      filePath: files[index].path,
      category: cat,
    };

    let newUpload = new UploadModel(finalImage);

    return newUpload
      .save()
      .then(() => {
        return { msg: `${files[index].originalname} upload Successful.` };
      })
      .catch((error) => {
        if (error) {
          if (error.name === "MongoError" && error.code === 11000) {
            return Promise.reject({
              error: `${files[index].originalname} file already exists.`,
            });
          }
          return Promis.reject({
            error:
              error.message || `Cannot upload ${files[index].originalname}`,
          });
        }
      });
  });
  Promise.all(result)
    .then((msg) => {
      // res.json(msg)
      res.redirect("/");
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
