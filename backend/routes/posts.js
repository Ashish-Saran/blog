const router = require("express").Router();
const Post = require("../model/schema");

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

//GET ALL POSTS
// router.get("/", async (req, res) => {
//   const username = req.query.user;
//   const catName = req.query.cat;
//   const Page_Size = 3;
//   const page = parseInt(req.query.page || "1");
//   const total = await Post.countDocuments({});
//   try {
//     let posts;
//     if (catName) {
//       posts = await Post.find({
//         categories: {
//           $in: [catName],
//         },
//       })
//         .limit(Page_Size)
//         .skip(Page_Size * page);
//     } else {
//       posts = await Post.find()
//         .limit(Page_Size)
//         .skip(Page_Size * page);
//     }
//     res.status(200).json({ totalPages: Math.ceil(total / Page_Size), posts });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || "0";
  const limit = 6;
  const total = await Post.countDocuments({});
  let posts;
  try {
    posts = await Post.find()
      .limit(limit)
      .skip(limit * page);
    // Calculate the total number of pages
    const totalPages = Math.ceil(total / limit);

    // Create the results object
    const results = {
      posts: posts,
      totalPages: totalPages,
    };

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
