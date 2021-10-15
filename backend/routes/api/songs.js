const { requireAuth } = require("../../utils/auth");

const express = require('express');
const asyncHandler = require('express-async-handler');
const {singleMulterUpload, singlePublicFileUpload} = require('../../awsS3')
const { Song } = require('../../db/models');
const { User } = require('../../db/models');
const {Comment} = require('../../db/models');

const router = express.Router();

router.get('/discover', asyncHandler(async function(_req, res) {
    const songs = await Song.findAll({
      include: [{
        model: User
      }]
    });
    return res.json(songs);
  }));

router.get('/artist/:userId(\\d+)', asyncHandler(async function(req, res) {
    const userId = parseInt(req.params.userId, 10);
    const songs = await Song.findAll({
      where: {
        userId: userId
      },
      include: [{
        model: User
      }]
    });
    return res.json(songs);
  }));

  router.post('/upload', requireAuth, singleMulterUpload('file'), asyncHandler(async (req, res) => {
    const songFile = await singlePublicFileUpload(req.file);
    const {title} = req.body;
    const newSong = await Song.create({
      title,
      userId: req.user.id,
      songFile
    });
    const song = await Song.findByPk(newSong.id, {
      include: [{
        model: User
      }]
    })

    res.json(song);
}))

router.put('/song/:id(\\d+)', asyncHandler(async (req, res) => {
  const song = await Song.findByPk(+req.params.id);
  await song.update(req.body);
  res.json(song);
}))

router.delete('/song/:id', asyncHandler(async (req, res) => {
  const songId = +req.params.id;
  // const songComments = await Comment.findAll({
  //   where: {
  //     songId: songId
  //   }
  // });

  await Comment.destroy({where: {songId: songId}});

  // songComments.forEach(songComment => {
  //   await songComment.destroy();
  // });

  const song = await Song.findByPk(songId);
  await song.destroy();
  res.json({ message: 'Successfully deleted!' })
}))

module.exports = router;
