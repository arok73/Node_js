require('./dbconnection');
const Student = require('./models/Student');

function handleError(err) {
    console.error(err);
    process.exit(1);
}

Student.find().where('study_points').lt(100).exec(function (err, students) {
    if (err) {
        return handleError(err);
    }
    console.log(students);

})