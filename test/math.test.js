const assert = require('assert');

// const add = require('../lib/add')

describe('math function', () => {

    it('add', () => {
        assert.equal(add(1, 2), 3);
    });

    it('subtract', () => {
        assert.equal(subtract(2, 1), 1);
    });

    it('multiply', () => {
        assert.equal(multiply(2, 2), 4);
    });

    it('divide', () => {
        assert.equal(divide(6, 3), 2);
    });

    it('error for /0', () => {
        let called = false;
        try {
            divide(12, 0);
            called = true;
        }
        catch (err){
            assert.equal(err.message, 'attempted to divide by 0');
        }
        assert.equal(called, false);
    });
});

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    if(y === 0) throw new Error('attempted to divide by 0');
    return x / y;
}

module.exports = add, subtract, multiply, divide;