function removeDuplicate(array) {
    var result = [],
        temp = {};
    for(i=0,len=array.length; i<len; i++) {
        var value = array[i];
        if(!temp[value]) {
            temp[value] = true;
            result.push(value);
        }
    }
    return result;
}
