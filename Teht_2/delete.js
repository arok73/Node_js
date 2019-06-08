const dbmethods = require('./dbmethods');

const student_code = 'x1234';

function handleError(err) {
    console.error(err);
    process.exit(1);
}

dbmethods.deleteGrade(student_code, function(err, result) {
    if (err) {
        return handleError(err);
    }
});

dbmethods.delete(student_code, function(err, result) {
    if (err) {
        return handleError(err);
    }
    console.log(result.affectedRows + ' student and grades deleted' );
});
