function divide(a, b){
    if(b === 0) throw new Error('Attempted to divide by zero');
    return (a / b);

}

module.exports = divide;