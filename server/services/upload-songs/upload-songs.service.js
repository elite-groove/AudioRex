// Initializes the `upload-songs` service on path `/upload-songs`
const createService = require('./upload-songs.class.js');
const hooks = require('./upload-songs.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/upload-songs', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('upload-songs');

  service.hooks(hooks);
};
