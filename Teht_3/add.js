require('./dbconnection');
const Student = require('./models/Student');
const NewStudentObject = require('./NewTestStudentObject');

const NewStudent = Student(NewStudentObject);
let start = new Date();

// Tallennus tietokantaan
NewStudent.save(function (err, result) {
    if (err) {
        return handleError(err);
    }
    console.log('Student object created: ' + result);
    let end = new Date() - start;
    console.info('Execution time: %dms', end);
});