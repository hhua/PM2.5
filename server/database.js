var mongo = require('mongodb');

//======================================
//      mongo init
//          note -- unlike the notes, this deletes
//                  everything in testCollection 
//                  before calling openDb's callback
//======================================

var host = 'localhost';
var port = mongo.Connection.DEFAULT_PORT;

var optionsWithEnableWriteAccess = { w: 1 };
var dbName = 'myDb';

var client = new mongo.Db(
    dbName,
    new mongo.Server(host, port),
    optionsWithEnableWriteAccess
);

//var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/myDb'; 

function openDb(onOpen, doc){
    client.open(onDbReady);

    function onDbReady(error){
        if (error)
            throw error;
        client.collection('cityCollection', onCityCollectionReady);
    }

    function onCityCollectionReady(error, cityCollection){
        if (error)
            throw error;
        
        cityCollection.remove({}, function(error){
            if (error)
                throw error;
            onOpen(cityCollection, doc);
        });
    }
}

function closeDb(){
    client.close();
}

function openDbQuery(query, response){
    client.open(onDbReady);

    function onDbReady(error){
        if (error)
            throw error;
        client.collection('cityCollection', onCityCollectionReady);
    }

    function onCityCollectionReady(error, cityCollection){
        if (error)
            throw error;
        
        cityCollection.find(query).toArray(function(err, docs){
            if(err)
                throw err;

            var parsedDocs = JSON.parse(JSON.stringify(docs));
            console.log("docs " + JSON.stringify(parsedDocs[0].cities));
            response.write(parsedDocs[0].cities);
            console.log("Response was writen back to client!");
            response.end();
            closeDb();
        });
    }
}

//======================================
//      inserting test documents
//======================================

//openDb(onDbOpen);

function onDbOpen(collection, doc){
    //var documents = [ { n: 1 }, { n: 2 }, { n: 3 }, { n: 4 } ];
    //insertDocuments(collection, documents, onTestDocumentsInserted);
    insertDocument(collection, doc, onTestDocumentsInserted);

    function onTestDocumentsInserted(err){
        if (err)
            throw err;
        console.log('document inserted!');
        //findDoc(collection);
    }
}

function insertDocuments(collection, docs, done){
    if (docs.length === 0){
        done(null);
        return;
    }
    var docHead = docs.shift(); //shift removes first element from docs
    collection.insert(docHead, function onInserted(err){
        if (err){
            done(err);
            return;
        }
        insertDocuments(collection, docs, done);
    });
}

function insertDocument(collection, doc, done){
    collection.insert(doc, function onInserted(err){
        if(err){
            done(err);
            return;
        }
        done(null);
        closeDb();
    });
}

//======================================
//      finding documents
//======================================

var logger = function(error, result){
    if (error)
        throw error;
    console.log(result);
    closeDb();
}

var logDoc = logger;
var logDocs = logger;

function findDoc(collection){
    //var query = { n: { $gt: 2 } };
    var query = {};
    collection.find(query).toArray(logDocs);
}

exports.openDb = openDb;
exports.openDbQuery = openDbQuery;
exports.onDbOpen = onDbOpen;
exports.insertDocument = insertDocument;
