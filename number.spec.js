describe('number util test', function () {
  var nUtil;
  it('생성', function () {
    nUtil = new NumberUtil();
  });

  it('merge 테스트', function () {
    var testArray = [1,3,3,3,1,5,6,7,8,1];
    nUtil.merge(testArray);
  });
});
