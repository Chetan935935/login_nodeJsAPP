import { module, test } from 'qunit';
import { setupTest } from 'login-logout/tests/helpers';

module('Unit | Route | sign-up', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:sign-up');
    assert.ok(route);
  });
});
