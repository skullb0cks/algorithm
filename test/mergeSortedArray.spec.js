describe('algorithm', function() {
    it('mergeArray', function() {
        var result = mergeArray([2,5,6,9], [1,2,3,29]);
        expect(result).toEqual(jasmine.arrayContaining([2, 5, 6, 9, 1, 2, 3, 29]));
    });

    it('sortedArray', function() {
        var result = sortedArray([2, 51, 6, 9, 1, 21, 3, 29]);
        expect(result).toEqual(jasmine.arrayContaining([1, 2, 3, 6, 9, 21, 29, 51]));
    });

    it('getMinIndex', function() {
        var result = getMinIndex([null, 1, null, 9, null, 21, 3, 29]);
        expect(result).toBe(1);
    });

    it('mergeSortedArray', function() {
        var result = mergeSortedArray([2,6,5,9], [1,29,3,2]);
        expect(result).toEqual(jasmine.arrayContaining([1, 2, 2, 3, 5, 6, 9, 29]));
    });
});