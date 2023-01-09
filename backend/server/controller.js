const Post = require('../model/schema');

//submit post
exports.submitPost = async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    } catch (error) {
        res.status(500).json(error);
    }
}

//get all posts

exports.getPost = async (req, res) => {
    const catName = req.query.cat;
    try {
        let posts;
        if (catName) {
            posts = await Post.find({
                categories: {
                    $in: [catName],
                }
            });
        } else {
            posts = await Post.find();
        }
    } catch (error) {
        res.status(500).json(error)
    }
}