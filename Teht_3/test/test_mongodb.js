/*
 * Testataan että mongodb:n perustoiminnot toimivat
 */
require('../dbconnection');
const expect = require('chai').expect;
const Student = require('../models/Student');
const NewTestStudentObject = require('../NewTestStudentObject');

// NewTestStudentObject on skeeman mukainen olio josta tehdään Student -tyyppinen
const NewTestStudent = Student(NewTestStudentObject);

describe('Testing mongodb', () => {
    it('should save data to test database', (done) => {
        NewTestStudent.save(done);
    });

    it('should retrieve correct data from test database', (done) => {
        Student.find({
            name: 'Testi Opiskelija'
        }, (err, student) => {
            if (err) {
                throw err;
            }
            if (student.length === 0) {
                throw new Error('Student with given name value not found!');
            }
            expect(student[0]).to.have.property('_id'); // mongo on luonut dokumentille _id-kentän
            expect(student[0].grades[0]).to.have.property('course_code'); // alidokumentin eka kenttä olemassa
            done();
        });
    });
});
