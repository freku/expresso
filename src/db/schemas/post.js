const { Schema } = require("mongoose");

const postSchema = new Schema({
  title: String,
  content: String,
  likes: { type: Number, default: 0 },
  comments: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = postSchema;
