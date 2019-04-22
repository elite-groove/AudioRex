const users = require('./users/users.service.js');
const userDetails = require('./user-details/user-details.service.js');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(userDetails);
};
