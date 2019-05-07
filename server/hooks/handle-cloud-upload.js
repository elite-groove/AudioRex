// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'hmakvyfmx', 
  api_key: '362885389597267', 
  api_secret: 'c4qCc4iR4-Lb22x26jgj4Umw5uA' 
});

const uploadCloudinary = (path) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(path, {heicrop: 'limit'}, (error, result) => {
      if(error) {
        reject(error);
      }
      resolve(result);
    });
  });
}

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    console.log(context);
    const path = context.app.get('public') + '/' + context.result.id;
    return uploadCloudinary(path).then(res => {
      context.result = res;
      return context;
    }).catch(err => {
      throw new Error(err.message);
    });
  };
};
