const { requireAuth } = require("../../utils/auth");

const express = require('express');
const asyncHandler = require('express-async-handler');
// const { check, validationResult } = require('express-validator');
const { Song } = require('../../db/models');
const { User } = require('../../db/models');

// const SongRepository = require('../../db/song-repository');

const router = express.Router();

router.get('/discover', asyncHandler(async function(_req, res) {
    const songs = await Song.findAll({
      include: [{
        model: User
      }]
    });
    return res.json(songs);
  }));

module.exports = router;
