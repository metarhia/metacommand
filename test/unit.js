'use strict';

const metacommand = require('..');
const metatests = require('metatests');

metatests.test('Test stub', async test => {
  test.strictSame(metacommand, {});
  test.end();
});
