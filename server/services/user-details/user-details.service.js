// Initializes the `user-details` service on path `/user-details`
const createService = require('./user-details.class');
const createModel = require('../../models/user-details.model');
const hooks = require('./user-details.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/user-details', new createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('user-details');

  service.hooks(hooks);
};
