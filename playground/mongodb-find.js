// if TodoApp database is not there mongodb will automatically create the new database.
// same with the collection. if not created, mongo will create automatically.
// const MongoClient = require('mongodb').MongoClient;

const {MongoClient , ObjectID } = require('mongodb');


MongoClient.connect( 'mongodb://localhost:27017/TodoApp' , (err,db) => {

    if (err){
        return console.log('Unable to connect to mongo server');
    }

    console.log('connected to mongo server');
    // Below code is for finding the count. here count in then is the total count of the docs in the Todos collection.

    db.collection('Todos').find().count().then((count)=>{
        console.log('Todos---');
        console.log(count);
    }, (error) => {
        if ( error ){
            console.log('Unable to find the records-' , error );
        }
    });

    /*
        Below code is to find a document using a query. For that we only need to use an object in find and specify the field
        that we need to find it for. we here could use id or any other param to find the record.

        Note:- if we are using _id which is create by mongo then we need to use the ObjectID param as _id is a object
            and ObjectID will parese it to correct id. If _id is specified by you then no need to use the ObjectID constructor
            just simple use id eg - _id:123.
    */

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
