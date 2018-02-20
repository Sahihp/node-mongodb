// if TodoApp database is not there mongodb will automatically create the new database.
// same with the collection. if not created, mongo will create automatically.
// const MongoClient = require('mongodb').MongoClient;

const {MongoClient , ObjectID } = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect( 'mongodb://localhost:27017/TodoApp' , (err,db) => {

    if (err){
        return console.log('Unable to connect to mongo server');
    }

    console.log('connected to mongo server');

    // db.collection('Todos').insertOne({
    //     text : 'Add another collection named User',
    //     completed:true
    // }, (err , result) => {
    //     if (err){
    //         return console.log('Unable to insert data');
    //     }

    //     console.log(JSON.stringify(result.ops , undefined , 2));
    // });

   
        // db.collection('User').insertOne({
        //     name:'Ronaldo',
        //     age:30,
        //     location:'Portugal'
        // },(err , result)=>{
        //     if ( err ){
        //         return console.log('Unable to insert the user.');
        //     }

        //     console.log(JSON.stringify(result.ops , undefined , 2));
        // })




    // db.collection('User').insertOne({
    //     name : 'Sahil',
    //     age : 25,
    //     location : 'India'
    // }, (err , result)=> {

    //     if (err){
    //         return console.log('Unable to insert the data');
    //     }

    //     console.log(JSON.stringify(result.ops , undefined , 2));

    // });

    db.close();


    

});
