var RandomNumbers = require('./b_module');

const rand = new RandomNumbers(290, 300, [1.5, 2.5, 3.5, 4.5, 5.5, 6.5]);

console.log(rand.randomNumber());
console.log(rand.calcAverage());