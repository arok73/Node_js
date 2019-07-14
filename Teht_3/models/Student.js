const mongoose = require('mongoose');
const Grade = require('./Grade');
mongoose.Promise = global.Promise;

const StudentSchema = new mongoose.Schema({
    student_code: { type: String, unique: true, required: true, match: /[a-z]{1}[0-9]{4}/ },
    name: { type: String, required: true, max: 80 },
    email: { type: String, unique: true, required: true, max: 50 },
    study_points: { type: Number, required: false, min: 0, max: 300 },
    grades: { type: [Grade], required: true }
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;