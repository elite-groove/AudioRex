// Initializes the `radio` service on path `/radio`
const createService = require('./radio.class.js');
const hooks = require('./radio.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/radio', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('radio');

  service.hooks(hooks);
};
