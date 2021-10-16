const express = require('express');
const asyncHandler = require('express-async-handler');
const songsRouter = require('./songs.js')
const { requireAuth } = require("../../utils/auth");

const { Comment, Song, User } = require('../../db/models');

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

  songsRouter.post('/song/:songId(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const songId = parseInt(req.params.songId, 10);
    const {body} = req.body;
    const newComment = await Comment.create({
        songId,
        userId: req.user.id,
        body
    });
    const comment = await Comment.findByPk(newComment.id, {
        include: [{
            model: User,
            model: Song
          }]
    });
    res.json(comment);
}))

songsRouter.put('/song/:songId(\\d+)/:id(\\d+)', asyncHandler(async (req, res) => {
    const comment = await Comment.findByPk(+req.params.id);
    await comment.update(req.body);
    res.json(comment);
}))

songsRouter.delete('/song/:songId(\\d+)/:id(\\d+)', asyncHandler(async (req, res) => {
  const commentId = +req.params.id;
  await Comment.destroy({where: {id: commentId}});
  res.json({ message: 'Successfully deleted!' })
}))

module.exports = router;
