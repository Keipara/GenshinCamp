// const { requireAuth } = require("../../utils/auth");

// const express = require('express');
// const asyncHandler = require('express-async-handler');
// const {singleMulterUpload, singlePublicFileUpload} = require('../../awsS3')
// const { Comment } = require('../../db/models');
// const { User } = require('../../db/models');

// const router = express.Router();

// router.delete('/song/:id', asyncHandler(async (req, res) => {
//     const songId = +req.params.id;
//     const songComments = await Comment.findAll({
//         where: {
//           songId: songId
//         }
//       });
//     await songComments.destroy();
//     res.json({ message: 'Successfully deleted!' })
//   }))

//   module.exports = router;
