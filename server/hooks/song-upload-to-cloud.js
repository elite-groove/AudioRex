// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

function uploadSongToCloud(files) {
  const cloudinary = require('cloudinary').v2;
  // console.log(files);

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(files[0].path, { resource_type: "video" }, function (error, result) {
      if(error) reject(error);
      
      resolve(result);
    });
  });
}

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    console.log(context.data);
    const request = JSON.parse(context.data.request);
    console.log(request);
    context.data = request;

    return await uploadSongToCloud(context.params.files).then(
      (songLink) => {
        context.data.song.link = songLink.url;
        return context;
      }
    ).catch(
      err => {
        console.log(err);
      }
    );
  };
};
