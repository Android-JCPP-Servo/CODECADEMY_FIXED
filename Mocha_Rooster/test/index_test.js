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
    describe('.timeAtDawn', () => {
        // Get current hour
        it('returns its argument as a string', () => {
            // Get current hour
            const d = new Date();
            let hour = d.getHours();
        
            // Call .timeAtDawn and store result
            const results = Rooster.timeAtDawn(hour);
        
            // Check if results is a string
            assert.strictEqual(typeof results, 'string');
        })
        // Invalid input
        it('returns its argument as a string (invalid input)', () => {
            // Set invalid hour
            let hour = '12';
    
            // Call .timeAtDawn and store result
            const results = Rooster.timeAtDawn(hour);
            console.log(results);
    
            // Check if results is a string
            assert.strictEqual(results, 'string');
        })
    })
})