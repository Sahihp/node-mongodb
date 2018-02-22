// if TodoApp database is not there mongodb will automatically create the new database.
// same with the collection. if not created, mongo will create automatically.

// const MongoClient = require('mongodb').MongoClient;

const {MongoClient , ObjectID } = require('mongodb');


MongoClient.connect( 'mongodb://localhost:27017/TodoApp' , (err,db) => {

    if (err){
        return console.log('Unable to connect to mongo server');
    }
    // delete Many

    // db.collection('Todos').deleteMany({
    //     text:'Check the docs and update github'
    // }).then((result) => {
    //     console.log(result);
    // });

    // delete One

    // db.collection('Todos').deleteOne({
    //     text:'Only one will be deleted'
    // }).then((result) => {
    //     console.log(result);
    // });

    // find one and delete

    /*
        Below code will be used when we have to delete a document by some field. Most commonly we will delete the document by
        its id. findOneAndDelete is the method we use here. Just pass the object with the given field.

        Note:- if we are using _id which is create by mongo then we need to use the ObjectID param as _id is a object
            and ObjectID will parese it to correct id. If _id is specified by you then no need to use the ObjectID constructor
            just simple use _id eg - _id:123.
    */

    db.collection('Todos').findOneAndDelete({
        _id:ObjectID('5a8c6a4d6d203b814e214e4c')
        // _id: 123
    }).then((res)=>{
        console.log(res);
    });


    

    console.log('connected to mongo server');
});
