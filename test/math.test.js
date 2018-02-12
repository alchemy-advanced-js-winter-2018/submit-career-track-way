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
        assert.equal(subtract(5, 2), 3);
    });

    it('multiply', () => {
        assert.equal(multiply(2, 3), 6);
    });

    it('divide', () => {
        assert.equal(divide(12, 3), 4);
    });

    it('throws an error dividing by zero', () => {
        let succeeded = false;
        try {
            divide(12, 0);
            // if we get here, it did NOT thrown error;
            succeeded = true;
        }
        catch(err) {
            // if we end up here, things are good!
            assert.equal(err.message, 'Attempt to divide by zero');
        }

        assert.equal(succeeded, false, 'expected error to be thrown, but call to divide with zero succeeded');

    });
});

