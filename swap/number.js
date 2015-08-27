function swapNumber(a, b) {
    var sum = a + b;   
    return {
        a:  sum - a, 
        b: sum - b
    }
}

module.exports = swapNumber;
