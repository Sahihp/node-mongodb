/*
    Mongoose does not need to provide with a callback function to start our query.
    It automatically handles everything. it will run the required code after it has connected to the database.

    Typecast exist in mongoose. if you pass true/a number for type string then it will typecase it to a string 
        and will return "true" / a number in quotes like "20"

    
*/

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

var User = mongoose.model('User',{
    email:{
        type:String,
        required:true,
        trim:true,
        minLength:1
    }
});


var newUser = new User({
    email:'test@test.com'
});

newUser.save().then((data)=>{
    console.log(data);
},(e)=>{
    console.log('error', e );
});

// var Todo = mongoose.model('Todo',{
//     text:{
//         type:String,
//         required:true,
//         minLength:1,
//         trim:true
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     },
//     completedAt :{
//         type:Number,
//         default: null
//     }
// });

// var todo = new Todo({
//     text:'Check the whitespace  2'
// });

// todo.save().then((data)=>{
//     console.log( 'Saved todo- ', data);
// },(err)=>{
//     console.log('Unable to save the data.');
//     console.log(err);
// });


