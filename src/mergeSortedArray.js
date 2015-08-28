function mergeArray(array1, array2) {
    var res = array1;
    for(var i=0, len=array2.length; i<len; i++) {
        res.push(array2[i]);
    }
    return res
}

function getMinIndex(array) {
    var min = null,
        idx;
    for(var i=0, len=array.length; i<len; i++) {
        if(array[i] === null) continue;
        if(min === null || min > array[i] || min == array[i]) {
            min = array[i];
            idx = i;
        }
    }
    return idx;
}

function sortedArray(array) {
    var res = [],
        k = array.length;
    while(k > 0) {
        var idx = getMinIndex(array);
        res.push(array[idx]);
        array[idx] = null;
        --k;
    }
    return res;
}

function mergeSortedArray(array1, array2) {
    return sortedArray(mergeArray(array1, array2));
}