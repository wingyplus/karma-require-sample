define(['Fizzbuzz'], function(fizzbuzz) {
    describe('Fizzbuzz', function() {
        it('should say hello', function() {
            expect(fizzbuzz.say()).toEqual('hello');
        });
    });
});
