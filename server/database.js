var mongo = require('mongodb');

var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/myDb'; 

function openDbInsert(doc){
    mongo.Db.connect(mongoUri, function(err, db){
        if(err)
            throw err;
        db.collection('cityCollection', onCityConnection);

        function onCityConnection(er, collection){
            if(er)
                throw er;
            collection.remove({}, function(error){
                if(error)
                    throw error;
                insertDocument(collection, doc, onTestDocumentsInserted);

                function onTestDocumentsInserted(errr){
                    if (errr)
                      throw errr;

                    console.log('document inserted!');
                    db.close();
                }
            });
        }
    });
}

function openDbQuery(query, response){
    mongo.Db.connect(mongoUri, function(err, db){
        if(err)
            throw err;
        db.collection('cityCollection', onCityConnection);

        function onCityConnection(er, collection){
            if(er)
                throw er;
            
            collection.find(query).toArray(function(error, docs){
                if(error)
                    throw error;

                var parsedDocs = JSON.parse(JSON.stringify(docs));
                console.log("docs " + JSON.stringify(parsedDocs[0].cities));
                response.write(parsedDocs[0].cities);
                console.log("Response was writen back to client!");
                response.end();
                db.close();
            });
        }
    });
}

exports.openDbInsert = openDbInsert;
exports.openDbQuery = openDbQuery;
