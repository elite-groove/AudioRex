// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

function populateSongs(context) {
  return new Promise((resolve, reject) => {
    const app = context.app;
    const albumId = context.id;

    const albumService = app.service('albums');

    const Album = albumService.Model.findById(albumId).populate('songs')

    Album.exec(function (err, album) {
      if (err) throw new Error(err);

      resolve(album);
    });
  });
}

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {

    return await populateSongs(context).then((album) => {
      console.log(album);

      context.result = album;
      return context;
    });
  };
};
