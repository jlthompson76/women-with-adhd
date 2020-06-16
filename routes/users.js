// Users Routes & Database

// --------------- Node Modules ---------------

// Required Node.js modules
// Install from npm (Node package manager) by entering "npm i express dotenv mongodb" in terminal

// Express - minimalist web app framework for Node.js
const express = require('express');
const router = express.Router();

// Dotenv - loads environment variables from .env file into process.env to maintain data privacy
const dotenv = require('dotenv').config();

// Body-Parser - Node.js body parsing middleware, already included with Node.js, no need to install separately
const body_parser = require('body-parser');

// MongoDB - NoSQL document-oriented database that stores data in flexible, JSON-like documents
const mongodb = require('mongodb');

// --------------------------------------------

// Creates PORT variable
const PORT = process.env.PORT || 3000;

// Uses Node.js body parsing middleware
router.use(body_parser.json());
router.use(body_parser.urlencoded({ extended: true }));

// Configures database
let db_handler;

// Database environment variables (stored in .env file)
const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;
const COLLECTION_NAME = process.env.USERS_COLLECTION;

// --------------- Start Routes ---------------

// Users Pages

// Users Home
router.get('/', (req, res) => {
  res.redirect('');
  console.log('Redirecting to Users page');
});

// POST Form Data

// Posts data to database after user submits form
// router.post('/submit', (req, res) => {
//   console.log('User has submitted form data');
//   // Requests data from body and adds to form_data variable
//   const form_data = req.body;
//   console.log(form_data);

//   // Creates variables for form data
//   const name = form_data['name'];
//   const date = form_data['date'];


//   // Creates object for form data
//   const user = {
//     'name': name,
//     'date': date,
    
//   }

  // Adds single object (document) to database collection
//   db_handler.collection(COLLECTION_NAME).insertOne(user, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(`Form data added to ${DB_NAME}.${COLLECTION_NAME}`);
//       // Redirects to page
//       res.redirect('');
//       console.log('Redirecting to page');
//     };
//   });
// });

// GET Form Data

// Gets all users from database collection
// router.get('/all-users', (req, res) => {
//   db_handler.collection(COLLECTION_NAME).find({}).toArray((err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.render('all-users', {
//         'all-users': result
//       });
//     console.log('All Users page requested');
//     };
//   });
// });

// --------------- End Routes ---------------

// Connects to MongoDB Atlas cloud database
let mongo_client = mongodb.MongoClient;
mongo_client.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db_client) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(`Connected to ${DB_NAME}.${COLLECTION_NAME}`);
    db_handler = db_client.db(DB_NAME);
  };
});

// Exports routes for inclusion in entry point (app.js)
module.exports = router;
