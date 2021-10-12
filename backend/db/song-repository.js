const { Song } = require("./models");

async function list() {
  return await Song.findAll();
}


module.exports = {
  list
};
