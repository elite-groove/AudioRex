// Initializes the `addSongs` service on path `/add-songs`
const createService = require('./add-songs.class.js');
const hooks = require('./add-songs.hooks');
const multer = require('multer');
var randomstring = require("randomstring");

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate,
    multi: true
  };

  const storage = multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, app.get('public')), // where the files are being stored
    filename: (_req, file, cb) => cb(null, `${Date.now()}-${randomstring.generate(10)}-${file.originalname}`.replace(/ /gi, '-')) // getting the file name
  });

  const upload = multer({
    storage,
    limits: {
      fieldSize: 250 // Max field value size `MB`
    }
  });

  const handleMulterSong = (req, _res, next) => {
    const { method } = req;
    if (method === 'POST' || method === 'PATCH') {
      // I believe this middleware should only transfer
      // files to feathers and call next();
      // and the mapping of data to the model shape
      // should be in a hook.
      // this code is only for this demo.
      req.feathers.files = req.files; // transfer the received files to feathers
      // for transforming the request to the model shape
      // const body = [];
      // for (const file of req.files)
      //   body.push({
      //     description: req.body.description,
      //     orignalName: file.originalname,
      //     newNameWithPath: file.path
      //     // userId: req.user.id
      //   });
      // req.body = method === 'POST' ? body : body[0];
    }
    next();
  }

  // Initialize our service with any options it requires
  app.use('/add-songs', upload.any(), handleMulterSong,  createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('add-songs');

  service.hooks(hooks);
};
