/*
 * Testataan että mysql:n perustoiminnot toimivat
 */
// Kantayhteys otetaan dbconnection.js -tiedostossa joka on sisällytetty
// require-lauseella Dbmethods.js -tiedostoon
const Dbmethods = require('../dbmethods');
const expect = require('chai').expect;

describe('Testing mysql', () => {

    it('should save data to test database', (done) => {
        Dbmethods.add('x1234', 'Testi Opiskelija', 'x1234@jamk.fi', 0, function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result.affectedRows + ' records inserted' );
            done();
        });
    });

    it('should retrieve correct data from test database', (done) => {
        Dbmethods.findAll((err, students) => {
            if (err) {
                throw err;
            }
            if (students.length === 0) {
                throw new Error('No students in database!');
            }
            expect(students[0]).to.have.property('student_code');
            expect(students[0].student_code).to.equal('x1234');
            done();
        });
    });
});
