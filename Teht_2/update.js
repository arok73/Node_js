const dbmethods = require('./dbmethods');

const student_code = 'x1234';
const student_points = '10';

function handleError(err) {
    console.error(err);
    process.exit(1);
}

dbmethods.update(student_points, student_code, function (err,result) {
    if (err) {
        return handleError(err);
    }
    console.log(result.affectedRows + ' records updated' );
});