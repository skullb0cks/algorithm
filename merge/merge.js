function mergeArray() {
    if (arguments.length < 2) {
        throw new Error('Data not available');
    }
    
    var arr1 = arguments[0],
        arr2 = arguments[1],
        len1 = arr1.length,
        len2 = arr2.length,
        i = 0,
        result = {},
        reArr = [],
        key;

    for (; i < len1; i++) {
        result[arr1[i]] = arr1[i];
    } 

    for (i=0; i < len2; i++) {
        result[arr2[i]] = arr2[i];
    }
   
    for (key in result) {
        reArr.push(parseInt(key, 10));
    } 
   
    reArr.sort(function(a, b) {
        return a - b;
    });
    return reArr;      
}

module.exports = mergeArray;
