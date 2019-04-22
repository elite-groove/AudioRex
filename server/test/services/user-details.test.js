const assert = require('assert');
const app = require('../.././/app');

describe('\'user-details\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-details');

    assert.ok(service, 'Registered the service');
  });
});
