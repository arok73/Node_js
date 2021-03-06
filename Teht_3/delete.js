require('./dbconnection');
const Student = require('./models/Student');
const Student_code = 't1234';

function handleError(err) {
    console.error(err);
    process.exit(1);
}

Student.findOneAndRemove({ student_code: 't1234' }, function (err) {
    if (err) {
        return handleError(err);
    }

    console.log('Student deleted!');
});