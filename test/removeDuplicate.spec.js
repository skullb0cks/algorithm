describe('algorithm', function() {
    it('removeDuplicate', function() {
        var array = removeDuplicate([1,3,3,6,6,4,3,5,6]);
        expect(array).toEqual(jasmine.arrayContaining([1, 3, 6, 4, 5]));
    });
});