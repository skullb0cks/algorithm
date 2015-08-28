function reverse(str, isCharReverse) {
    if (!str) {
        throw new Error('You have to run this method with strings');
    }
    if (isCharReverse) {
        return reverseChar(str);
    } else {
        return reverseWord(str);
    }   
    
}

/**
 * @param {string} A string to reverse
 */
function reverseChar(string) {
    var splitString = string.split('');
    return splitString.reverse().join('');
}

/**
 * @param {string} A string to reverse
 */
function reverseWord(string) {
    var splitWord = string.split(' ');
    return splitWord.reverse().join(' ');
}

module.exports = reverse;
