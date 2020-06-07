// Node.js Entry Point
// Run by entering "npm start" in terminal

// Required Node.js modules
const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');

// Imports routes modules from routes directory
const indexRouter = require('./routes/index');
const asrsRouter = require('./routes/asrs');
const resourcesRouter = require('./routes/resources');
const usersRouter = require('./routes/users');

// Creates PORT variable
const PORT = process.env.PORT || 3000;

// Initializes Express application
const app = express();

// Sets view engine to EJS
app.set('view engine', 'ejs');

// Sets path to public directory for static CSS, JS, and image files
app.use(express.static(path.join(__dirname, 'public')));

// Uses imported routes
app.use('/', indexRouter);
app.use('/asrs', asrsRouter);
// app.use('/resources', resourcesRouter);
app.use('/users', usersRouter);

// Starts server and confirms connection
app.listen(PORT, (err, result) => {
  if (err) {
    console.log(err);
  } else {
  console.log(`Server is running on port ${PORT}`);
  };
});
