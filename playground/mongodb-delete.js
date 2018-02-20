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

    // db.collection('Todos').findOneAndDelete({
    //     _id:ObjectID('5a8c6a4d6d203b814e214e4c')
    //     // _id: 123
    // }).then((res)=>{
    //     console.log(res);
    // });

    db.collection('Todos').find().toArray().then((res)=>{
        console.log(JSON.stringify(res,undefined,2));
    },(err)=>{
        if ( err ){
            console.log('error-' , err);
        }
    })

    console.log('connected to mongo server');
});
