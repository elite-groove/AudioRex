const assert = require('assert');
const app = require('../.././/app');

describe('\'Albums\' service', () => {
  it('registered the service', () => {
    const service = app.service('albums');

    assert.ok(service, 'Registered the service');
  });
});
