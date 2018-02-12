const assert = require('assert');
const add = require('../lib/add');
const subtract = require('../lib/subtract');
const multiply = require('../lib/multiply');
const divide = require('../lib/divide');

describe('math functions', () => {
    it('add', () => {
        assert.equal(add(1, 2), 3);
    });

    it('subtract', () => {
        assert.equal(subtract(5, 3), 2);
    });

    it('multiply', () => {
        assert.equal(multiply(5, 5), 25);
    });

    it('divide', () => {
        assert.equal(divide(10, 2), 5);
    });
});

