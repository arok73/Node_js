const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/studentdb2', {
    useMongoClient: true
});

mongoose.connection.on('error', function(error) {
    console.log('Connection error:', error);
});
