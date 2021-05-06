const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoUrl = ('mongodb://localhost:27017');
const dbName = 'DailyNewspaper';
const colName = 'Articles';

const client = new MongoClient(mongoUrl);



client.connect().catch((err)=>{
    console.log('error');
    process.exit(1);
});
module.exports={
    getArticles
}

function getArticles(){
    const db =client.db(dbName);
    const collection= db.collection(colName);
    console.log(collection.find().toArray());
    return collection.find().toArray();
}


