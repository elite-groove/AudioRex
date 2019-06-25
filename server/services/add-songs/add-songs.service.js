// Initializes the `addSongs` service on path `/add-songs`
const createService = require('./add-songs.class.js');
const hooks = require('./add-songs.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/add-songs', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('add-songs');

  service.hooks(hooks);
};
