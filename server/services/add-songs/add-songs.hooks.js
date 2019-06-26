const { authenticate } = require('@feathersjs/authentication').hooks;

const handleAddSong = require('../../hooks/handle-add-song');
const songUploadToCloud = require('../../hooks/song-upload-to-cloud');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [songUploadToCloud(), handleAddSong()],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
