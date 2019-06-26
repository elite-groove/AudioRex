// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

function handleSongDeletion(app, context) {
  const mongooseClient = app.get('mongooseClient');

  const AlbumModel = app.service('albums');
  const SongModel = app.service('songs');


  return new Promise((resolve, reject) => {
    AlbumModel.findById(context.results.album).exec(
      (err, album) => {
        if(err) throw new Error(err);

        const songIndex = album.songs.indexOf(context.id);

        album.songs.splice(songIndex);

        album.save(
          err => {
            if(err) throw new Error(err);
          }
        );
        
      }
    );
  });
}

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    handleSongDeletion(context.app, context);
    return context;
  };
};
