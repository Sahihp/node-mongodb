// if TodoApp database is not there mongodb will automatically create the new database.
// same with the collection. if not created, mongo will create automatically.
// const MongoClient = require('mongodb').MongoClient;

const {MongoClient , ObjectID } = require('mongodb');


MongoClient.connect( 'mongodb://localhost:27017/TodoApp' , (err,db) => {

    if (err){
        return console.log('Unable to connect to mongo server');
    }

    console.log('connected to mongo server');

    db.collection('Todos').find().count().then((count)=>{
        console.log('Todos---');
        console.log(count);
    }, (error) => {
        if ( error ){
            console.log('Unable to find the records-' , error );
        }
    });

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a8c606d6d203b814e214a09')  
    // }).toArray().then((docs)=>{
    //     console.log('Todos---');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (error) => {
    //     if ( error ){
    //         console.log('Unable to find the records-' , error );
    //     }
    // });

    // db.collection('Todos').find().toArray().then((docs)=>{
    //     console.log('Todos---');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (error) => {
    //     if ( error ){
    //         console.log('Unable to find the records-' , error );
    //     }
    // });

    // db.close();
});
