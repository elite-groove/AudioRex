// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
// eslint-disable-next-line no-unused-vars

function createAlbum(app, context) {
  const mongooseClient = app.get('mongooseClient');

  const SongModel = app.service('songs').Model;
  const AlbumModel = app.service('albums').Model;

  // console.log(context.data);

  // Song
  const { song } = context.data; // req body should contain song props
  song._id = new mongooseClient.Types.ObjectId();
  // console.log(song);
  const createdSong = new SongModel({ ...song });

  createdSong.save((err) => {
    if(err) throw new Error(err);

    // Album
    const { album } = context.data; // req body should contain album props

    const createdAlbum = new AlbumModel({ ...album }); // create new album with song
    
    createdAlbum.songs.push(createdSong._id); // save object id reference to the song

    createdAlbum.save((err) => {
      if(err) throw new Error(err);
    });
  });
}

module.exports = function (options = {}) {
  return async context => {

    createAlbum(context.app, context);

    return context;
  };
};
