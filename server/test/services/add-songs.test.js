const assert = require('assert');
const app = require('../.././/app');

describe('\'addSongs\' service', () => {
  it('registered the service', () => {
    const service = app.service('add-songs');

    assert.ok(service, 'Registered the service');
  });
});
