const assert = require('assert');
const add = require('../lib/add');

describe('math functions', () => {
    it('add', () => {
        assert.equal(add(1, 2), 3);
    });

});