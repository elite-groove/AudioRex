const assert = require('assert');
const app = require('../.././/app');

describe('\'radio\' service', () => {
  it('registered the service', () => {
    const service = app.service('radio');

    assert.ok(service, 'Registered the service');
  });
});
