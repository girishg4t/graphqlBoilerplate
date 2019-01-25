const MUUID = require('uuid-mongodb');

const uuid = MUUID.from('393967e0-8de1-11e8-9eb6-529269fb1459');



var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
var url = 'mongodb://localhost:27017/CECIL-Core';
MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
    assert.equal(null, err);
    console.log("Successfully connected to server");
    var db = client.db;
    // Find some documents in our collection
    client.collection("User").find({}).toArray(function (err, docs) {
        // Print the documents returned
        console.log(docs);
        // Close the DB
        client.close();
    });
    // Declare success
    console.log("Called find()");
});

// var MongoClient = require('mongodb').MongoClient;

// // Connect to the db
// MongoClient.connect("mongodb://localhost:27017/CECIL-Core", {
//     useCreateIndex: true,
//     useNewUrlParser: true
// }, function (err, db) {
//     if (err) { return console.dir(err); }
//     var col = db.collection("User");
//     console.log(col)
//     var result = db.collection('User').findOne({
//         _id: uuid,
//     }).exe();
//     console.log(result)
// });