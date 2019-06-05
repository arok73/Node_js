const moda = require('../../Teht_1a/a_module');
const expect = require('chai').expect;

describe('Testing moda', () => {

    it('should export a function', () => {

        expect(moda).to.be.a('Function');
    });

    it('should draw number between 290 and 300', () => {

        const result = moda(290, 300);

        expect(result).to.be.within(290, 300);
    });

    it('should return null with wrong parameters', () => {

        const result = moda('huuhaa', 100);

        expect(result).to.be.null;
    });
    it('should return null if first parameter value is bigger than second parameter value', () => {

        const result = moda(101, 100);

        expect(result).to.be.null;
    });
});
