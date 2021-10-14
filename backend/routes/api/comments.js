// const { requireAuth } = require("../../utils/auth");
// const express = require('express');
// const asyncHandler = require('express-async-handler');
// const { Song } = require('../../db/models');
// const { User } = require('../../db/models');

// const router = express.Router();

// router.post("/:id(\\d+)/comments", requireAuth, asyncHandler(async (req, res) => {
//     const { body } = req.body;
//     const songId = req.params.id;
//     const userId = req.user.id;
//     console.log(userId)
//     const comments = await Comment.create({
//       userId,
//       songId,
//       body,
//     });
//     return res.json(comments);
//   })
// );
