var mergeArray = require('./merge');

console.log('[1, 2, 3, 4, 6, 11, 15]');
console.log(mergeArray([6, 3, 2, 1, 1, 3, 11], [3, 6, 15, 4, 1])); 

console.log('[3, 5, 10, 15, 41]');
console.log(mergeArray([15, 41, 10], [5, 3, 15]));

