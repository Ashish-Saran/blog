const router = require("express").Router();
const Post = require("../model/schema");

router.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || "0";
  const categoryName = req.query.category;
  const limit = 6;
  let posts;
  try {
    if (categoryName) {
      totalItems = await Post.countDocuments({ category: categoryName });
      posts = await Post.find({
        category: categoryName,
      })
        .limit(limit)
        .skip(limit * page);
    } else {
      totalItems = await Post.countDocuments({});
      posts = await Post.find()
        .limit(limit)
        .skip(limit * page);
    }
    // Calculate the total number of pages
    const totalPages = Math.ceil(totalItems / limit);

    const hasMore = page* limit < totalItems;

    // Create the results object
    const results = {
      posts,
      totalPages,
      totalItems,
      page,
      hasMore,
      categoryName,
    };

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create({ ...req.body });
    return res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//UPDATE POST
// router.put("/:id", async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (post.username === req.body.username) {
//       try {
//         const updatedPost = await Post.findByIdAndUpdate(
//           req.params.id,
//           {
//             $set: req.body,
//           },
//           { new: true }
//         );
//         res.status(200).json(updatedPost);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(401).json("You can update only your post!");
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
