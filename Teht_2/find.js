const dbmethods = require('./dbmethods');

const min_student_points = '100';

function handleError(err) {
    console.error(err);
    process.exit(1);
}

dbmethods.find(min_student_points, function(err, result) {
    if (err) {
        return handleError(err);
    }
    console.log(result);
});