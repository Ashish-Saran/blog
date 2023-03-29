const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
