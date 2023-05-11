const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const url = 'mongodb://127.0.0.1:27017/myapp';

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully!');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });

module.exports = mongoose;

/* const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo db connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB; */

/* const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017/';
// Database Name
const dbName = 'Testament';

let db;

const connect = MongoClient.connect(
  url,
  { useNewUrlParser: true },
  (err, client) => {
    if (err) return console.log(err);
    // Storing a reference to the database so you can use it later
    db = client.db(dbName);
    console.log(`Connected MongoDB: ${url}`);
    console.log(`Database: ${dbName}`);
  }
);
module.exports = connect; */


