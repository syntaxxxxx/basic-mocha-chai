const assert = require('assert');

describe('file to be tested', () => {
    context('function to be tested', () => {

        // this is function is called in all function
        before(() => {
            console.log('=== before ===')
        });

        // this is function is called in single function
        beforeEach(() => {
            console.log('=== beforeEach ===')
        });

        // assert between 2 value
        it('should do somethig', () => {
            assert.equal(1,1);
        });

        // assert between 2 object
        it('should do something else', () => {
            assert.deepEqual({ name: 'Fiqri Hafzain' }, { name: 'Fiqri Hafzain' })
        });

        // pending test
        it('this is a pending test')

        // this is function is called in all function
        after(() => {
            console.log('=== after ===')
        });

        // this is function is called in single function
        afterEach(() => {
            console.log('=== afterEach ===')
        });

        context('another funnction', () => {

            it('should do something');
        });

    });
});