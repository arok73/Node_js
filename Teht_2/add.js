const dbmethods = require('./dbmethods');

function handleError(err) {
    console.error(err);
    process.exit(1);
}

dbmethods.add('t1117', 'Elias Keppola', 't1117@testi.fi', 90, function(err, result) {
    if (err) {
        return handleError(err);
    }
    console.log(result.affectedRows + ' records inserted' );
});
