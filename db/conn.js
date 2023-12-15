import { MongoClient } from 'mongodb';

const Db = process.env.MONGODB_URI;


const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let _db;

export async function connectToServer(callback) {
  try {
    await client.connect();
    _db = client.db("Blog");
    console.log("Successfully connected to MongoDB.");
    return callback(null);
  } catch (err) {
    return callback(err);
  }
}

export function getDb() {
  return _db;
}
