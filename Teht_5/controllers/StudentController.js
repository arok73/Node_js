const Student = require("../models/Student");
const Grade = require("../models/Grade");

// Create and Save a new Note
exports.create = (req, res) => {
    // Create a Note
    const student = new Student({
        student_code: req.body.student_code,
        name: req.body.name,
        email: req.body.email,
        study_points: req.body.study_points,
        grades: req.body.grades
    });

    // Save Note in the database
    student
        .save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while creating the Student."
            });
        });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Student.find()
        .then(students => {
            res.send(students);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while retrieving students."
            });
        });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Student.findById(req.params.studentId)
        .then(students => {
            if (!students) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.studentId
                });
            }
            res.send(students);
        })
        .catch(err => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.studentId
                });
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.studentId
            });
        });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Find note and update it with the request body
    Student.findByIdAndUpdate(
        req.params.studentId,
        {
            student_code: req.body.student_code,
            name: req.body.name,
            email: req.body.email,
            study_points: req.body.study_points,
            grades: req.body.grades
        },
        { new: true }
    )
        .then(students => {
            if (!students) {
                return res.status(404).send({
                    message: "Student not found with id " + req.params.studentId
                });
            }
            res.send(students);
        })
        .catch(err => {
            if (err.kind === "ObjectId") {
                return res.status(404).send({
                    message: "Student not found with id " + req.params.studentId
                });
            }
            return res.status(500).send({
                message:
                    "Error updating student with id " + req.params.studentId
            });
        });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Student.findByIdAndRemove(req.params.studentId)
        .then(students => {
            if (!students) {
                return res.status(404).send({
                    message: "Student not found with id " + req.params.studentId
                });
            }
            res.send({ message: "Student deleted successfully!" });
        })
        .catch(err => {
            if (err.kind === "ObjectId" || err.name === "NotFound") {
                return res.status(404).send({
                    message: "Student not found with id " + req.params.studentId
                });
            }
            return res.status(500).send({
                message:
                    "Could not delete student with id " + req.params.studentId
            });
        });
};
