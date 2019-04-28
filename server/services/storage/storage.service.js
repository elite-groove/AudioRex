// Initializes the `storage` service on path `/storage`
const createService = require('./storage.class.js');
const hooks = require('./storage.hooks.js');

const blobService = require('feathers-blob');
const fs = require('fs-blob-store');

module.exports = function (app) {
  const blobStorage = fs(app.get('public'));

  const options = {
    Model: blobStorage
  };

  // Initialize our service with any options it requires
  app.use('/storage', blobService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('storage');

  service.hooks(hooks);
};
