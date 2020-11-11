const { model } = require("mongoose");
const PostSchema = require("../schemas/post");

const PostModel = model("Post", PostSchema);

module.exports = PostModel;