const dbmethods = require('./dbmethods');

function handleError(err) {
    console.error(err);
    process.exit(1);
}

dbmethods.add('t1111', 'Teppo Testaaja', 't1111@testi.fi', 105, function(err, result) {
    if (err) {
        return handleError(err);
    }
    console.log(result.affectedRows + ' records inserted' );
});
