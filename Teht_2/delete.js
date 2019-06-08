const dbmethods = require('./dbmethods');

function handleError(err) {
    console.error(err);
    process.exit(1);
}

dbmethods.deletegrade('t1113', function(err, result) {
    if (err) {
        return handleError(err);
    }
});

dbmethods.delete('t1113', function(err, result) {
    if (err) {
        return handleError(err);
    }
    console.log(result.affectedRows + ' student and grades deleted' );
});
