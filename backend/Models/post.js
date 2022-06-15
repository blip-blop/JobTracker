const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  jobTitle: {
    type: string,
    required: true,
  },
  jobLocation: {
    type: string,
    required: true,
  },
  jobDescription: {
    type: string,
    required: true,
  },
  jobDate: {
    type: string,
    required: true,
  },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
