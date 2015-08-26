function NumberUtil() {

}

NumberUtil.prototype.merge = function(array) {
  var results = {}, val, arrResults;
  for (var attrname in array) {
    val = array[attrname];
    results[val] = array[attrname];
  }
  arrResults = Object.keys(results).map(function (key) {return results[key]});
  console.log(arrResults);
  return arrResults;
};
