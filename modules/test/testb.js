/* const Modb = require('../modb.js');
var expect = require('chai').expect;

describe('Testing modb', () => {

    it('should export a class', () => {
        // JS-luokka on edelleen konstruktorifunktio
        expect(Modb).to.be.a('Function');
    });

    it('should draw number between 290 and 300', () => {
        const modbobj = new Modb(290, 300);
        expect(modbobj.randomNumber()).to.be.within(290, 300);
    });

    it('should calculate average from values of array', () => {
        const newarray = [1, 2, 3, 4, 5, 6];
        const newarray2 = [1.5, 2.5, 3.5, 4.5, 5.5, 6.5];
        const modbobj = new Modb(290, 300, newarray);
        const modbobj2 = new Modb(290, 300, newarray2);
        expect(modbobj.calcAverage()).to.equal(3.5);
        expect(modbobj2.calcAverage()).to.equal(4.0);
    });
});
 */