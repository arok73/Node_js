const conn = require('./dbconnection');

const dbmethods = {

    add: function (student_code, name, email, study_points, callback) {
        return conn.query('insert into Students set student_code = ?, name = ?, email = ?, study_points = ?',
            [student_code, name, email, study_points], callback);
    },

    delete: function (student_code, callback) {
        return conn.query('delete from Students where student_code = ?', [student_code], callback);
    },

    find: function (study_points, callback) {
        return conn.query('select * from Students where studypoints < ?', [study_points], callback);
    },

    update: function (study_points, student_code, callback) {
        return conn.query('update Students set study_points = ? where student_code = ?', [study_points, student_code], callback);
    },

    addgrade: function (grade_id, grade, course_code, student_code, callback) {
        return conn.query('insert into Grades set grade_id = ?, grade = ?, course_code = ?, student_code = ?', [grade_id, grade, course_code, student_code], callback);
    },

    updategrade: function (study_points, student_code, callback) {
        return conn.query('update Students set study_points = ? where student_code = ?', [study_points, student_code], callback);
    },

    deletegrade: function (student_code, callback) {
        return conn.query('delete from Grades where student_code = ?', [student_code], callback);
    }
};
module.exports = dbmethods;
