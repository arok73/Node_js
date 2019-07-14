require('./dbconnection');
const Student = require('./models/Student');

let st_code = 'o1234';
let grade = { course_code: 'HTS10800', grade: 4 };

Student.findOneAndUpdate(
    { student_code: st_code },
    { $push: { grades: grade } },
    function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log('Grade added for student!');
        }
    });