// Import ASSERT
const assert = require('assert');

// Import Rooster
const Rooster = require('../index.js');

// Rooster describe block
describe('Rooster', () => {
    describe('.annouceDawn', () => {
        it('returns a rooster call', () => {
            // Define expected output
            const expected = 'cock-a-doodle-doo!';
            
            // Call .annouceDawn and store result
            const results = Rooster.announceDawn();
            
            // Use an assert to compare actual and expected results
            assert.strictEqual(results, expected);
        })
    })
})