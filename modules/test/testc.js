const modcobj = require('../../Teht_1c/c_module');
const expect = require('chai').expect;


describe('Testing c_module', () => {

    it('should export an object', () => {
        expect(modcobj).to.be.an('Object');
    });

    it('should draw number between 100 and 200', () => {
        expect(modcobj.randomNumber()).to.be.within(100, 200);
    });

    it('should calculate average from values of array', () => {
        expect(modcobj.calcAverage()).to.equal(3.5);
    });
});
