

class UserDetailsService {
  constructor(options) {
    this.options = options;
  }

  find(params) {
    return this.options.Model.find({}, (err, doc) => {
      // console.log(doc);
      return Promise.resolve(doc);
    });
  }
  get(id, params) {
    console.log(id);

  }
  create(data, params) {
    const UserDetails = new this.options.Model(data);

    return UserDetails.save().then(resp => {
        return Promise.resolve(resp);
    }).catch(err => {
      if(err) {
        throw new Error(err.message);
      }
    });
  }
  update(id, data, params) {}
  patch(id, data, params) {}
  remove(id, params) {}
  setup(app, path) {}
}

module.exports = UserDetailsService;