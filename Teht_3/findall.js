require('./dbconnection');
const Student = require('./models/Student');

function handleError(err) {
    console.error(err);
    process.exit(1);
}

// kaikkien käyttäjien haku
Student.find({}, function (err, users) {
    if (err) {
        return handleError(err);
    }

    // tulosta kaikki käyttäjät
    console.log(users);
});