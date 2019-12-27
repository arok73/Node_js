const mongoose = require('mongoose');

var Grade = new mongoose.Schema({
    course_code: { type: String, required: true, max: 50 },
    grade: { type: Number, required: false, min: 0, max: 5 }
});

module.exports = Grade;