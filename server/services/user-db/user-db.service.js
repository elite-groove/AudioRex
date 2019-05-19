// Initializes the `user-db` service on path `/user-db`
const createService = require('feathers-mongoose');
const createModel = require('../../models/user-db.model');
const hooks = require('./user-db.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/user-db', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('user-db');

  service.hooks(hooks);
};
