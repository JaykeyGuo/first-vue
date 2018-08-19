var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('posts', {
        title: 'Posts'
    });
});

router.get('/list', function(req, res, next) {
    res.json({
        postsList: ['Post1', 'Post2', 'Post3']
    });
});

module.exports = router;
