
class RandomNumbers {
    constructor(min, max, array){
        this.min = 100;
        this.max = 200;
        this.array = [1,2,3,4,5,6];
    }
    
    

    randomNumber() {
        if (typeof (this.min) === 'number' && typeof (this.max) === 'number' && this.min < this.max) {

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

}

module.exports = new RandomNumbers();