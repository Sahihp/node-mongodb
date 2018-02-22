// if TodoApp database is not there mongodb will automatically create the new database.
// same with the collection. if not created, mongo will create automatically.

// const MongoClient = require('mongodb').MongoClient;

const {MongoClient , ObjectID } = require('mongodb');



MongoClient.connect( 'mongodb://localhost:27017/TodoApp' , (err,db) => {

    if (err){
        return console.log('Unable to connect to mongo server');
    }
    /*
        findOneAndUpdate takes four arguments.
        First is the object of filter by which we want to filter/get the record.In most cases in will be id.
        Second is the object of changes which we want to apply.
        Third is the extra option like sort etc
        Fourth will be the callback.

        $set will set the fields to the given value. If any field does note exist in a document,
            then it will add that field to the document. only to that document not all documents.

        $inc will increment a number to a given value. eg $inc:{ value : 10 } will add 10 to the value.
    */

    // db.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectID('5a8c606d6d203b814e214a09')
    // } , {
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // });

    /*
        test with user collection..
    */

    db.collection('User').findOneAndUpdate({
        _id:new ObjectID('5a8c5c85d8fa232a542934ef')
    },{
        // $set:{
        //     location:'Portugal',
        //     name:'Cristiano Ronaldo'
        // }
        $inc:{
            goals:50
        }
    },{
        returnOriginal:false
    }).then((res)=>{
        console.log(res);
    });
});
