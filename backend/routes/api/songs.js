const { requireAuth } = require("../../utils/auth");

const express = require('express');
const asyncHandler = require('express-async-handler');
const {singleMulterUpload, singlePublicFileUpload} = require('../../awsS3')
const { Song } = require('../../db/models');
const { User } = require('../../db/models');

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

  router.post('/upload', singleMulterUpload('file'), asyncHandler(async (req, res) => {
    const songFile = await singlePublicFileUpload(req.file);
    const {title} = req.body;
    const newSong = await Song.create({
      title,
      userId: res.locals.user.id,
      songFile
    });

    res.json(newSong);
}))

module.exports = router;
