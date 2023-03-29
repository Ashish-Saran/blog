const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
    },
    excerpt: {
      type: String,
    },
    content: {
      type: String,
    },
    image: {
      type: String,
    },
    category: {
      type: String,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
