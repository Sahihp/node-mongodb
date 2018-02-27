/*
    Mongoose does not need to provide with a callback function to start our query.
    It automatically handles everything. it will run the required code after it has connected to the database.

    Typecast exist in mongoose. if you pass true/a number for type string then it will typecase it to a string 
        and will return "true" / a number in quotes like "20"

    
*/
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/Todo');
var {User} = require('./models/User');

var app = express();

app.use(bodyParser.json());

app.post( '/todos', ( req , res ) => {
    console.log(req.body);
    var todo = new Todo(req.body);
    todo.save().then((result) => {
        res.send(result);
    } , (e) => {
        res.status(400).send(e);
    });
});


app.listen(3000, () => {
    console.log('Started on port 3000');
});


