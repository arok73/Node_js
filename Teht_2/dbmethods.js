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
        return conn.query('select * from Students where study_points < ?', [study_points], callback);
    },

    findAll: function (callback) {
        return conn.query('select * from Students', callback);
    },

    update: function (study_points, student_code, callback) {
        return conn.query('update Students set study_points = study_points + ? where student_code = ?', [study_points, student_code], callback);
    },


    addGrade: function (grade, course_code, student_code, callback) {
        return conn.query('insert into Grades set grade = ?, course_code = ?, student_code = ?', [grade, course_code, student_code], callback) ;
    },

    updateGrade: function (grade, student_code, callback) {
        return conn.query('update Grades set grade = ? where student_code = ?', [grade, student_code], callback);
    },

    deleteGrade: function (student_code, callback) {
        return conn.query('delete from Grades where student_code = ?', [student_code], callback);
    }
};
module.exports = dbmethods;
