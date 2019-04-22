// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const emailExists = context.service.Model.find( { email: { $eq: context.data.email } });

    return emailExists.toArray().then(
      email => {
        console.log(email);
        if (email.length) {
          throw new Error('Email already exists');
        } else {
          return context;
        }
      }
    );
  };
};
