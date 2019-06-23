const users = require('./users/users.service.js');

const userDb = require('./user-db/user-db.service.js');

const storage = require('./storage/storage.service.js');

const radio = require('./radio/radio.service.js');

const albums = require('./albums/albums.service.js');

const songs = require('./songs/songs.service.js');

const uploadSongs = require('./upload-songs/upload-songs.service.js');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(userDb);
  app.configure(storage);
  app.configure(radio);
  app.configure(albums);
  app.configure(songs);
  app.configure(uploadSongs);
};
