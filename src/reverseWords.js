function reverseWords(string) {
    var array =[],
        temp = '',
        space = ' ';
    for(var i=0, len=string.length; i<len; i++) {
        if(string[i] !== space) {
            temp += string[i];
        }
        if(string[i] === space || i === len-1) {
            array.push(temp);
            temp = '';
        }
    }

    for(var k=array.length-1; k>=0; k--) {
        temp += array[k];
        if(k !== 0)
            temp += space;
    }
    return temp
}