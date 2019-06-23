const assert = require('assert');
const app = require('../.././/app');

describe('\'upload-songs\' service', () => {
  it('registered the service', () => {
    const service = app.service('upload-songs');

    assert.ok(service, 'Registered the service');
  });
});
