const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001 || 

// Define middleware here
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
<<<<<<< HEAD

// const mongoose = require("mongoose");
// const MONGODB_URI =
//   process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks";
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Ensure you have run 'npm install mongodb'

var MongoClient = require('mongodb').MongoClient;

var username = 'skendalluf';
var password = 'rockaura74';
var hosts = 'iad2-c16-1.mongo.objectrocket.com:54903,iad2-c16-2.mongo.objectrocket.com:54903,iad2-c16-0.mongo.objectrocket.com:54903';
var database = 'googlebooks';
var options = '?replicaSet=83c81eceed4341ee9d52dc85853389d7';
var connectionString = 'mongodb://' + username + ':' + password + '@' + hosts + '/' + database + options;

MongoClient.connect(connectionString, function(err, db) {
    if (db) {
        db.close();
    }
    if (err) {
        console.log('Error: ', err);
    } else {
        console.log('Connected!');
        process.exit();
    }
=======
const mongoose = require("mongoose");
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true
>>>>>>> da7dab71e4424912e2cbcfb48654c9bedd4f5b65
});

require("./routes/api-routes")(app);

app.listen(PORT, () => {
<<<<<<< HEAD
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});   

// Final Project
=======
console.log(`🌎 ==> API server now on port ${PORT}!`);
});
>>>>>>> da7dab71e4424912e2cbcfb48654c9bedd4f5b65
