var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    student_code: String,
    name: String,
    email: String,
    study_points: Number,
    grades: Number
});

var User = mongoose.model('User', userSchema);

module.exports = User;