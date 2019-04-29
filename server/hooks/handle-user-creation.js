// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    console.log(context.result);
    const userDetailService = context.app.service('user-details');
    const storage = context.app.service('storage');

    const user = context.result;

    // upload avatar
    return storage.create({uri: user.avatar}).then(
      avatar => {
        console.log(avatar);
        throw new Error(avatar);
      }
    );
    // get url of avatar
    // save url along with the rest of the user details 

    // return userDetailService.create(context.result).then(
    //   resp => {
    //     context.result = resp;
    //     // return context;
    //   }
    // );
  };
};
