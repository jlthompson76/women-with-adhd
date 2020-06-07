// Adult ADHD Self-Report Scale (ASRS) Routes & Database

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
const COLLECTION_NAME = process.env.ASRS_COLLECTION;

// --------------- Start Routes ---------------

// ASRS Pages

// ASRS Home - Adult ADHD Self-Report Scale (ASRS-v1.1)
router.get('/', (req, res) => {
  res.redirect('adult-adhd-self-report-scale');
  console.log('Redirecting to Adult ADHD Self-Report scale page');
});

// ASRS Results - Single User
router.get('/results', (req, res) => {
  res.render('pages/asrs/asrs-results');
  console.log('ASRS Results page requested');
});

// ASRS Results - All Users
router.get('/results-all', (req, res) => {
  res.render('pages/asrs/asrs-results-all');
  console.log('ASRS All Results page requested');
});

// POST Form Data

// Posts data to database after user submits form
router.post('/submit', (req, res) => {
  console.log('User has submitted form data');
  // Requests data from body and adds to form_data variable
  const form_data = req.body;
  console.log(form_data);

  // Creates variables for form data
  const name = form_data['name'];
  const date = form_data['date'];
  const question1 = form_data['question-1'];
  const question2 = form_data['question-2'];
  const question3 = form_data['question-3'];
  const question4 = form_data['question-4'];
  const question5 = form_data['question-5'];
  const question6 = form_data['question-6'];
  const question7 = form_data['question-7'];
  const question8 = form_data['question-8'];
  const question9 = form_data['question-9'];
  const question10 = form_data['question-10'];
  const question11 = form_data['question-11'];
  const question12 = form_data['question-12'];
  const question13 = form_data['question-13'];
  const question14 = form_data['question-14'];
  const question15 = form_data['question-15'];
  const question16 = form_data['question-16'];
  const question17 = form_data['question-17'];
  const question18 = form_data['question-18'];

  // Creates object for form data
  const submittedForm = {
    'name': name,
    'date': date,
    'question-1': question1,
    'question-2': question2,
    'question-3': question3,
    'question-4': question4,
    'question-5': question5,
    'question-6': question6,
    'question-7': question7,
    'question-8': question8,
    'question-9': question9,
    'question-10': question10,
    'question-11': question11,
    'question-12': question12,
    'question-13': question13,
    'question-14': question14,
    'question-15': question15,
    'question-16': question16,
    'question-17': question17,
    'question-18': question18
  }

  // Adds single object (document) to database collection
  db_handler.collection(COLLECTION_NAME).insertOne(submittedForm, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Form data added to ${DB_NAME}.${ASRS_COLLECTION}`);
      // Redirects to ASRS Results page
      res.redirect('results');
      console.log('Redirecting to ASRS Results page');
    };
  });
});

// GET Form Data

// Gets all results from database collection
router.get('/asrs-results-all', (req, res) => {
  db_handler.collection(COLLECTION_NAME).find({}).toArray((err, result) => {
    if (err) {
      console.log(err);
    }
    else {
      res.render('asrs-results-all', {
        'asrs-results-all': result
      });
    console.log('All ASRS Results page requested');
    };
  });
});

// --------------- End Routes ---------------

// Connects to MongoDB Atlas cloud database
let mongo_client = mongodb.MongoClient;
mongo_client.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db_client) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(`Connected to ${DB_NAME} database, ${COLLECTION_NAME} collection`);
    db_handler = db_client.db(DB_NAME);
  };
});

// Exports routes for inclusion in entry point (app.js)
module.exports = router;
