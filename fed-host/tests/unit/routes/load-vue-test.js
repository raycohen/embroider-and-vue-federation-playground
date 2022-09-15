import { module, test } from 'qunit';
import { setupTest } from 'fed-host/tests/helpers';

module('Unit | Route | load-vue', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:load-vue');
    assert.ok(route);
  });
});
