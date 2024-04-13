const Comment = require("../models/Comment");
const Post = require("../models/Post");

async function addComment(postId, comment) {
  const newComment = await Comment.create(comment);

  await Post.findByIdAndUpdate(postId, {
    $push: { comments: newComment },
    returnDocument: "after",
  });

  await newComment.populate("author");

  return newComment;
}

async function deleteComment(postId, commentId) {
  await Comment.deleteOne({ _id: commentId });
  await Post.findByIdAndUpdate(postId, {
    $pull: { comments: commentId },
    returnDocument: "after",
  });
}

module.exports = {
  addComment,
  deleteComment,
};
