const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/studentdb', { useNewUrlParser: true, useFindAndModify: false });

mongoose.connection.on('error', function (error) {
    console.log('Connection error:', error);
});