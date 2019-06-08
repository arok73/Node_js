const dbmethods = require('./dbmethods');

const student_code = 'x1234';
const student_grade = '5';

function handleError(err) {
    console.error(err);
    process.exit(1);
}

dbmethods.updateGrade(student_grade, student_code, function (err,result) {
    if (err) {
        return handleError(err);
    }
    console.log(result.affectedRows + ' grade updated' );
});