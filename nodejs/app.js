// var a = 1;
// var b = 2;
// var c = a + b;

// console.log(c);

// ===========================================================

// // function statememt
// function greet() {
//     console.log("Hello, This is Tanuj!");
// }

// greet();

// // functions are first class
// function logGreeting(fn) {
//     fn();
// }

// logGreeting(greet);

// // function expression
// var greetMe = function() {
//     console.log("This is me again!");
// }
// greetMe();

// // it's first class
// logGreeting(greetMe);

// // use a function expression on the fly
// logGreeting(function() {
//     console.log("Hello, is this me really again?");
// });

// ====================================================================

// // Modules
// var greet = require("./greet");
// greet();

// ====================================================================
// var person = {
//     fn: "Tanuj",
//     ln: "Gupta",
//     greet: function() {
//         console.log("Hello, " + this.fn
//          + " " + this.ln);
//     }
// };

// person.greet();

// console.log(person['fn']);

// ====================================================================
// function Person(fn, ln) {
//     this.fn = fn;
//     this.ln = ln;
// }

// Person.prototype.greet = function() {
//     console.log("Hello " + this.fn + " " + this.ln);
// }
// var tanuj = new Person("Tanuj", "Gupta");
// tanuj.greet();

// console.log(tanuj.__proto__);

// ====================================================================

// var fn = "Gupta";

// (function (ln) {
//     var fn = "Tanuj";
//     console.log(fn);
//     console.log(ln);
// }("Super"));

// console.log(fn);

// =====================================================

// More on require

// var greet = require('./greet');
// greet.english();
// greet.spanish();

// greet['english']();
// greet['spanish']();


// ===================================================
// EventEmitter

// var emitter = require('events');
// var emtr = new emitter();
// emtr.on('greet', function() {
//     console.log("Somewhere, someone said hello.");
// });

// emtr.on('greet', function() {
//     console.log("A greeting occurred.");
// });

// console.log("hello");
// emtr.emit('greet');


//================================
// BUffer

// var buf = new Buffer("hello", 'utf8');
// console.log(buf);

// buf.write('halodear');
// console.log(buf.toString());

//=======================================
// Files and fs

// var fs = require("fs");

// var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

// function onRead(err, data) {
//     if (!err) {
//         console.log(data);
//     }
//     else {
//         console.log("error" + err);
//     }
// }
// var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', onRead);
// console.log(greet2);

//=======================================
// WebServer
//=======================================

// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res) {

//     if (req.url === '/') {
//         fs.createReadStream(__dirname + '/index.htm').pipe(res);
//     }
//     else if (req.url === '/api') {
//         res.writeHead(200, { 'Contect-Type': 'text/html' });

//         var obj = {
//             firstname: 'Tanuj',
//             lastname: 'Gupta'
//         };
//         res.end(JSON.stringify(obj));
//     }
//     else {
//         res.writeHead(404);
//         res.end();
//     }
//     // var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');

//     // var message = "Hey dude, whats up?!";
//     // html = html.replace("{Message}", message);
//     // res.end(html);

//     // Using pipes
//     // fs.createReadStream(__dirname + '/index.htm').pipe(res);

// }).listen(2002, 'localhost');

// ----------------------------------------
// moment
// ----------------------------------------
// var moment = require('moment');

// console.log(moment().format("ddd, hA"));

// ----------------------------------------
// Express
// ----------------------------------------
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Env varibale
var port = process.env.PORT || 2002;

var people = [
    {
        name: 'Tanuj Gupta'
    },
    {
        name: 'Shruti Gupta'
    },
    {
        name: 'Nikunj Aggarwal'
    }
];

var urlencodedparser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
    console.log('Requesr Url: ' + req.url);
    next();
})

app.get('/', function(req, res) {
    // res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /><body><h1>Hello world!</h1></body></head></html>');
    // res.render('index', {ID: req.params.id});
    res.render('index', {serverPeople: people});
});

app.get('/person/:id', function(req, res) {
    // res.send('<html><head><body><h1>PERSON: ' + req.params.id + '</h1></body></head></html>');
    res.render('person', {ID: req.params.id, Qstr: req.query.qstr} );
});

app.post('/person', urlencodedparser, function(req, res) {
    // res.send('<html><head><body><h1>PERSON: ' + req.params.id + '</h1></body></head></html>');
    res.send('Thank you!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.post('/personjson', jsonParser, function (req, res) {
    res.send('Thank you for JSON data!');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
})


app.get('/api', function(req, res) {
    res.json({ firstname: 'Tanuj', lastname: 'Gupta'});
})

app.listen(port);
