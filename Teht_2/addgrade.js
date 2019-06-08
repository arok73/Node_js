const conn = require('./dbconnection');
const dbmethods = require('./dbmethods');

const student_code = 'x1234';
const student_grade = '4';
const student_points = '5';
const grade_code = 'k00002';

function handleError(err) {
    console.error(err);
    process.exit(1);
}

conn.beginTransaction(function (err) {
    if (err) { throw err; }
    dbmethods.addGrade(student_grade, grade_code, student_code, function(error) {
        if (error) {
            return conn.rollback(function () {
                throw error;
            }
            );
        }
        dbmethods.update(student_points, student_code, function (error) {
            if (error) {
                return conn.rollback(function () {
                    throw error;
                });
            }
            conn.commit(function (err) {
                if (err) {
                    return conn.rollback(function () {
                        throw err;
                    });
                }
                console.log('Grade added and studentpoints updated!');
            });
        });
    });
});