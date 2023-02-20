


const Book = require("./models/booksModel.js");
const routes = require("./routes");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// connect to the mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks", {useNewUrlParser: true});

// Use all routes
app.use(routes);


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

// Final Project
