describe('algorithm', function() {
    it('reverseWords', function() {
        var result = reverseWords('fix this later gooood');
        expect(result).toBe('gooood later this fix');
    });
});