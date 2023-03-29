const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    var ext = file.originalname.substring(file.originalname.lastIndexOf("."));

    cb(null, file.fieldname + "-" + Date.now() + ext);
  },
});

const store = multer({ storage });

module.exports = store;
