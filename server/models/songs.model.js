// songs-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const songs = new Schema({
    title: { type: String, required: true },
    link: { type: String, required: true },
    album: { type: Schema.Types.ObjectId, ref: 'albums' }
  }, {
    timestamps: true
  });

  return mongooseClient.model('songs', songs);
};
