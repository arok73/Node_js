require('./dbconnection');
const Student = require('./models/Student');

let st_code = 'o1234';
let course = 'HTS10800';
let c_grade = 5;

Student.findOneAndUpdate(
    { student_code: st_code, 'grades.course_code': course },
    { $set: { 'grades.$.grade': c_grade } },
    function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log('Grade updated!');
        }
    });