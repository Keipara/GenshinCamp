const express = require('express');
const asyncHandler = require('express-async-handler');
const songsRouter = require('./songs.js')

const { Comment, Song, User, Genre } = require('../../db/models');

const router = express.Router();

songsRouter.get('/song/:songId(\\d+)', asyncHandler(async function(req, res) {
    const songId = parseInt(req.params.songId, 10);
    const comments = await Comment.findAll({
        where: {
          songId: songId
        },
      include: [{
        model: User
      }]
      });
    return res.json(comments);
  }));

router.post('/song/:songId(\\d+)', asyncHandler(async (req, res) => {
    const newComment = await Comment.create(req.body);
    const comment = await Song.findByPk(newComment.songId, {
        include: [{
            model: User,
            model: Song
          }]
    });
    res.json(comment);
}))

router.put('/song/:songId(\\d+)/:id(\\d+)', asyncHandler(async (req, res) => {
    const comment = await Comment.findByPk(+req.params.id);
    await comment.update(req.body);
    res.json(comment);
}))

router.delete('/song/:songId(\\d+)/:id(\\d+)', asyncHandler(async (req, res) => {
  const commentId = +req.params.id;
  await Comment.destroy({where: {id: commentId}});
  res.json({ message: 'Successfully deleted!' })
}))

module.exports = router;
