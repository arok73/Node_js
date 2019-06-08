const dbmethods = require('./dbmethods');

function handleError(err) {
    console.error(err);
    process.exit(1);
}

dbmethods.findall(function(err, result) {
    if (err) {
        return handleError(err);
    }
    console.log(result);
});