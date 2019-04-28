const assert = require('assert');
const app = require('../.././/app');

describe('\'storage\' service', () => {
  it('registered the service', () => {
    const service = app.service('storage');

    assert.ok(service, 'Registered the service');
  });
});
