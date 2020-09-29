'use strict';

const metacli = require('..');
const metatests = require('metatests');

metatests.test('Test stub', async test => {
  test.strictSame(metacli, {});
  test.end();
});
