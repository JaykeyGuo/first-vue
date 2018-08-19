var R = require('ramda');
var util = require('util');
require('util.promisify').shim();
var fs = require('fs');
var dirPathString = './';
var outputPathString = './readJSON.txt';

const readdir = util.promisify(fs.readdir);

function writeFile(path) {
    return function (content) {
        return util.promisify(fs.writeFile)(path, content)
    }
}

readdir(dirPathString)
    .then(R.filter(R.compose(R.not, R.isNil)))
    .then(R.filter(R.test(/.json/)))
    .then(writeFile(outputPathString))
    .catch(console.log)