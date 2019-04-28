const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const handleCloudUpload = require('../.././/hooks/handle-cloud-upload');

describe('\'handleCloudUpload\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      after: handleCloudUpload()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
