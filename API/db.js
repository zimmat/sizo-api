import { MongoClient, ObjectId } from 'mongodb'

export const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/sizo-api'



MongoClient.connect(url, function (err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  insertDocuments(db, function () {
    db.close();
  });
});

  