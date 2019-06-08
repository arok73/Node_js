const conn = require('./dbconnection');
const dbmethods = require('./dbmethods');

function handleError(err) {
    console.error(err);
    process.exit(1);
}

conn.beginTransaction(function (err) {
    if (err) { throw err; }
    dbmethods.addgrade('2', 'k00002', 't1113', function(error) {
        if (error) {
            return conn.rollback(function () {
                throw error;
            }
            );
        }
        dbmethods.update('5', 't1113', function (error) {
            if (error) {
                return conn.rollback(function () {
                    throw error;
                });
            }
            conn.commit(function (err) {
                if (err) {
                    return conn.rollback(function () {
                        throw err;
                    });
                }
                console.log('success!');
            });
        });
    });
});