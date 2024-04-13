module.exports = function (comment) {
  return {
    author: comment.author,
    id: comment.id,
    content: comment.content,
    publishedAt: comment.createdAt,
  };
};
