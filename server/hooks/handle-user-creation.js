// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const handleRegistration = (context) => {
  return new Promise((resolve, reject) => {
    // needs refactoring

    const userDetailService = context.app.service('user-details');
    const storage = context.app.service('storage');

    const user = context.params;
    const { token } = context.params;

    // upload avatar
    storage.create({uri: user.avatar}).then(
      avatar => {
        // assign avatar
        user.avatar = avatar.url;
        user.associated_acc = context.result._id;

        userDetailService.create(user).then(
          resp => {
            console.log('\n returned id \n', resp,'\n returned id \n');
            context.dispatch = { ...resp, token };
            resolve(context);
          }
        ).catch(
          err => {
            throw new Error(err);
          }
        );;
      }
    ).catch(
      err => {
        throw new Error(err);
      }
    );;
  });
}

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {

    return handleRegistration(context).then(
      savedUser => {
        console.log('\nresults\n', savedUser.data, '\nresults\n');
        return savedUser;
      }
    );

  };
};
