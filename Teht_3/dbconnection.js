const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/studentdb');

mongoose.connection.once('open', function(){
    console.log('Connection to database succesful!');
}).on('error', function(error){
    console.log('Connection error:', error);
});