const dbmethods = require('./dbmethods');

function handleError(err) {
    console.error(err);
    process.exit(1);
}

dbmethods.update('3', 't1113', function (err,result) {
    if (err) {
        return handleError(err);
    }
    console.log(result.affectedRows + ' records updated' );
});