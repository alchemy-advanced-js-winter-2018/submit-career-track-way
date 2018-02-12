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
        assert.equal(subtract(5, 1), 4);
    });

    it('multiply', () => {
        assert.equal(multiply(2, 4), 8);
    });

    it('divide', () => {
        assert.equal(divide(4, 2), 2);
    });

    it('throws an error if dividing by zero', () => {
        let succeeded = false;

        try {
            divide(12, 0);
            succeeded = true;
        }
        catch (err){
            // if we end up here, things are going as expected
            assert.equal(err.message, 'Attempt to divide by zero');
        }
        assert.equal(succeeded, false);
    });

});