const express = require("express");
const router = express.Router();
const mongo = require("mongoose");
const Post = require("../../db/models/post");
const { param, validationResult } = require("express-validator");

router.get("/", (req, res, next) => {
  const posts = Post.find().exec((err, posts) => {
    if (err) next(err);
    res.json(posts);
  });
});

router.put("/:postId", (req, res, next) => {});

router.post("/", (req, res, next) => {
  const data = req.body;

  let newPost = new Post({
    name: data.title,
    content: data.content,
  });

  newPost.save().then((err, post) => {
    if (err) next(err);
    res.json(newPost);
  });
});

router.delete(
  "/:postId",
  [param("postId").isLength({ min: 24, max: 24 })],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: "Bad Id format",
      });
    }

    const _id = new mongo.Types.ObjectId(req.params.postId);

    const post = Post.findByIdAndRemove(_id, {useFindAndModify: false}, function (err, post) {
      if (post === null) {
        return res.status(400).json({
          error: "Post not found",
        });
      }

      return res.json(post);
    });
  }
);

module.exports = router;
