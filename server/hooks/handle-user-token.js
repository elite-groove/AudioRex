// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const authService = context.app.service('authentication');
    const { email, password, sonidero_name, avatar } = context.data;

    // reassign required params
    context.data = { email, password };
    

    return authService.create({ email, password, strategy: 'local' }).then(
      token => {
        context.params = { sonidero_name, avatar, token, email };
        return context;
      }
    ).catch(
      err => {
        throw new Error(err);
      }
    );
  };
};
