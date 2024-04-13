const mongoose = require("mongoose");
const mapComment = require("./mapComment");

module.exports = function (post) {
  return {
    id: post.id,
    title: post.title,
    imageUrl: post.image,
    content: post.content,
    comments: Array.isArray(post.comments)
      ? post.comments.map((comment) =>
          mongoose.isValidObjectId(comment) ? comment : mapComment(comment)
        )
      : [],
    publishedAt: post.published_at,
  };
};
