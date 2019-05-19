const assert = require('assert');
const app = require('../.././/app');

describe('\'user-db\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-db');

    assert.ok(service, 'Registered the service');
  });
});
