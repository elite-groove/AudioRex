

class UserDetailsService {
  constructor(options) {
    this.options = options;
  }

  find(params) {
    return this.options.Model.find({associated_acc: params.id}, (err, doc) => {
      return Promise.resolve(doc);
    });
  }
  get(id, params) {
    console.log(id);
    return this.options.Model.find({associated_acc: id}, (err, doc) => {
      return Promise.resolve(doc);
    });
  }
  create(data, params) {
    // console.log('\n data in \n', data,'\n data in \n');
    const UserDetails = new this.options.Model(data);

    return UserDetails.save().then(resp => {
      // console.log('\n saved id \n', resp._id,'\n saved id \n');
        return resp._doc;
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