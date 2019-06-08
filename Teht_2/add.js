const dbmethods = require('./dbmethods');

const student_code = 'x1235';
const student_name = 'Ossi Opiskelija';
const sudent_email = 'x1235@jamk.fi';
const student_points = '110';

function handleError(err) {
    console.error(err);
    process.exit(1);
}

dbmethods.add(student_code, student_name, sudent_email, student_points, function(err, result) {
    if (err) {
        return handleError(err);
    }
    console.log(result.affectedRows + ' records inserted' );
});
