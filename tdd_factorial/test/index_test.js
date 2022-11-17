var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
    describe('.factorial', () => {
        it('test if the output of 5! is 120', () => {
            // Setup
            const baseNumber = 5;
            const expected = 120;
            // Exercise
            const result = Calculate.factorial(baseNumber);
            // Verification
            assert.strictEqual(result, expected);        
        });
        it('test if the output of 3! is 6', () => {
            // Setup
            const baseNumber = 3;
            const expected = 6;
            // Exercise
            const result = Calculate.factorial(baseNumber);
            // Verification
            assert.strictEqual(result, expected);
        })
    });
});