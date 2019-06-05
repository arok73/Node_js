
module.exports = class RandomNumbers {
    constructor(min, max, array) {
        this.min = min;
        this.max = max;
        this.array = array;
    }

    randomNumber() {
        var myArray = [];
        if (typeof (this.min) === 'number' && typeof (this.max) === 'number' && this.min < this.max) {

            var number = Math.floor(this.min + Math.random() * ((this.max - this.min) + 1));
            return Math.floor(this.min + Math.random() * ((this.max - this.min) + 1));

        } else {
            return null;
        }
    }

    calcAverage() {

        var sum = 0;
        for (var i = 0; i < this.array.length; i++) {
            sum += parseFloat(this.array[i], 10);
        }

        return sum / this.array.length;

    }

};