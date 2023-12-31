const {
  deleteSelectedComment,
  selectCommentById,
  updateCommentsByCommentId,
} = require("../models/comments.model");

exports.deleteCommentById = (req, res, next) => {
  const { comment_id } = req.params;
  const promise1 = deleteSelectedComment(comment_id);
  const promise2 = selectCommentById(comment_id);

  return Promise.all([promise1, promise2])
    .then((response) => {
      res.status(response[0].status).send();
    })
    .catch(next);
};

exports.patchCommentsByCommentId = (req, res, next) => {
  const { comment_id } = req.params;
  const { inc_votes } = req.body;
  return updateCommentsByCommentId(comment_id, inc_votes).then(
    (updatedComment) => {
      res.status(200).send({ updatedComment: updatedComment[0] });
    }
  )
  .catch(next)
};
