const assert = require('assert');
const add = require('../lib/add');
const subtract = require('../lib/subtract');

describe('math functions', () => {
    it('add', () => {
        assert.equal(add(1, 2), 3);
    });

    it('subtract', () => {
        assert.equal(subtract(5, 1), 4);
    });

});