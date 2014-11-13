// set up ========================================
var express = require('express'),
    app = express(), // create our app w/ express
    morgan = require('morgan'), // log requests to the console (express4)
    bodyParser = require('body-parser'), // pull information from HTML POST (express4)
    fs = require('fs'),
    path = require('path');

// configuration ========================================
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

// routes ======================================================================
app.get('/api/videos', function(req, res) {
    var filePath = path.join(__dirname, 'static/videos.json');

    fs.readFile(filePath, {encoding: 'utf-8'}, function(err, data) {
        if (err)
            res.send(err)

        console.log(data);
        res.json(JSON.parse(data));
    });
});

app.get('/api/videos/:video_id', function(req, res) {
    var filePath = path.join(__dirname, 'static/videos.json');

    fs.readFile(filePath, {encoding: 'utf-8'}, function(err, data) {
        if (err)
            res.send(err)

        var video = JSON.parse(data).filter(function(v) {
            return v.id == req.params.video_id;
        });

        console.log(video);
        console.log(typeof video);
        res.json(video);
    });
});

app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// listen (start app with node server.js) ========================================
app.listen(8080);
console.log("App listening on port 8080");
