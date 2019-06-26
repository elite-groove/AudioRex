// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

function addSong(app, context) {
  const mongooseClient = app.get('mongooseClient');
  const AlbumModel = app.service('albums').Model;
  const SongModel = app.service('songs').Model;

  return new Promise((resolve, reject) => {

    const song = new SongModel(context.data.song);

    song.album = context.data.albumId;

    song.save(
      (err, updatedSong) => {
        AlbumModel.findById(context.data.albumId).exec(
          (err, album) => {
            if (err) throw new Error(err);
            // push new song to album
            album.songs.push(updatedSong._id);

            album.save(
              (err, updatedAlbum) => {
                if (err) reject(err);

                // return updated album to promise
                resolve(updatedAlbum);
              }
            );
          }
        );
      }
    );
  });
}

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {

    return await addSong(context.app, context).then(
      (updatedAlbum) => {
        context.result = updatedAlbum;
        return context;
      }
    );

  };
};
