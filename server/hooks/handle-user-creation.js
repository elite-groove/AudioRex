// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    console.log(context.result);
    const userService = context.app.service('user-details');
    const user = context.result;
    
    user.associated_acc = user._id;
    delete user._id;

    return userService.create(context.result).then(
      resp => {
        context.result = resp;
        return context;
      }
    );
  };
};
