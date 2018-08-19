var mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:32776/front-end-exercise', {
    useMongoClient: true
});