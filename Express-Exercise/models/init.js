var mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:32768/front-end-exercise', {
    useMongoClient: true
});