// Page Routes

// --------------- Node Modules ---------------

// Required Node.js modules
// Install from npm (Node package manager) by entering "npm i express" in terminal

// Express - minimalist web framework for Node.js
const express = require('express'); 
const router = express.Router();

// --------------- Start Routes ---------------

// Home Page
router.get('/', (req, res) => {
  console.log('Home page requested');
  res.render('pages/index');
});

// What is ADHD?
router.get('/what-is-adhd', (req, res) => {
  console.log('What is ADHD? page requested');
  res.render('pages/what-is-adhd');
});

// Adult ADHD Self-Report Scale (ASRS-v1.1)
router.get('/adult-adhd-self-report-scale', (req, res) => {
  console.log('Adult ADHD Self-Report Scale page requested');
  res.render('pages/asrs/asrs-form');
});

// Living with ADHD
router.get('/living-with-adhd', (req, res) => {
  console.log('Living with ADHD page requested');
  res.render('pages/living-with-adhd');
});

// Treatments
router.get('/treatments', (req, res) => {
  console.log('Treatments page requested');
  res.render('pages/treatments');
});

// Psychotherapy & Coaching
router.get('/treatments/therapy-coaching', (req, res) => {
  console.log('Psychotherapy & Coaching page requested');
  res.render('pages/treatments/therapy-coaching');
});

// Medication
router.get('/treatments/medication', (req, res) => {
  console.log('Medication page requested');
  res.render('pages/treatments/medication');
});

// Natural & Holistic Therapies
router.get('/treatments/natural-holistic', (req, res) => {
  console.log('Natural & Holistic Therapies page requested');
  res.render('pages/treatments/natural-holistic');
});

// Mindfulness
router.get('/mindfulness', (req, res) => {
  console.log('Mindfulness page requested');
  res.render('pages/mindfulness');
});

// Humor
router.get('/humor', (req, res) => {
  console.log('Humor page requested');
  res.render('pages/humor');
});

// Resources
router.get('/resources', (req, res) => {
  console.log('Resources page requested');
  res.render('pages/resources');
});

// About Page
router.get('/about', (req, res) => {
  console.log('About page requested');
  res.render('pages/about');
});

// Contact Page
router.get('/contact', (req, res) => {
  console.log('Contact page requested');
  res.render('pages/contact');
});

// --------------- ADHD Topics ---------------

// Time Management
router.get('/time-management', (req, res) => {
  console.log('Time Management page requested');
  res.render('pages/topics/time-management');
});

// Procrastination
router.get('/procrastination', (req, res) => {
  console.log('Procrastination page requested');
  res.render('pages/topics/procrastination');
});

// Focus & Concentration
router.get('/focus-concentration', (req, res) => {
  console.log('Focus & Concentration page requested');
  res.render('pages/topics/focus-concentration');
});

// Productivity
router.get('/productivity', (req, res) => {
  console.log('Productivity page requested');
  res.render('pages/topics/productivity');
});

// Stress Management
router.get('/stress-management', (req, res) => {
  console.log('Stress Management page requested');
  res.render('pages/topics/stress-management');
});

// Emotional Regulation
router.get('/emotional-regulation', (req, res) => {
  console.log('Emotional Regulation page requested');
  res.render('pages/topics/emotional-regulation');
});

// Habits & Routines
router.get('/habits-routines', (req, res) => {
  console.log('Habits & Routines page requested');
  res.render('pages/topics/habits-routines');
});

// Organization
router.get('/organization', (req, res) => {
  console.log('Organization page requested');
  res.render('pages/topics/organization');
});

// --------------- End Routes ---------------

// Exports routes for inclusion in entry point (app.js)
module.exports = router;
