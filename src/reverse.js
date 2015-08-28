function reverse(string) {
    var str = '';
    for(var k=string.length-1; k>=0; k--) {
        str += string[k];
    }
    return str;

}
