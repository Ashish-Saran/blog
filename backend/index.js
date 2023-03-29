require("dotenv").config();
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();
const path = require("path");
const postRoute = require("./routes/posts");
// const uploadRoute = require("./routes/upload");

app.use(cors());

require("./database")();

app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "/images")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("image"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/posts", postRoute);
// app.use("/upload", uploadRoute);

app.listen(3001, () => console.log("server running"));
