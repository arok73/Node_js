require('./dbconnection');
const Student = require('./models/Student');

function handleError(err) {
    console.error(err);
    process.exit(1);
}

Student.findOneAndUpdate({ student_code: 't1234' }, { study_points: '40' }, function (err, study_points) {
    if (err) {
        return handleError(err);
    }
    // we have the updated user returned to us
    console.log('Study_points updated to ' + study_points);
});