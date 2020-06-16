// Routes Index - Page Routes

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

// Living with ADHD - Work
router.get('/work', (req, res) => {
  console.log('ADHD @ Work page requested');
  res.render('pages/work');
});

// Living with ADHD - School
router.get('/school', (req, res) => {
  console.log('ADHD @ School page requested');
  res.render('pages/school');
});

// Living with ADHD - Home
router.get('/home', (req, res) => {
  console.log('ADHD @ Home page requested');
  res.render('pages/home');
});

// Living with ADHD - Relationships
router.get('/relationships', (req, res) => {
  console.log('Relationships page requested');
  res.render('pages/relationships');

});// Living with ADHD - Parenting
router.get('/parenting', (req, res) => {
  console.log('Parenting page requested');
  res.render('pages/parenting');
});

// Living with ADHD - Health
router.get('/health', (req, res) => {
  console.log('Health page requested');
  res.render('pages/health');
});

// Living with ADHD - Finances
router.get('/finances', (req, res) => {
  console.log('Finances page requested');
  res.render('pages/finances');
});

// Treatments
router.get('/treatments', (req, res) => {
  console.log('Treatments page requested');
  res.render('pages/treatments');
});

// Treatments - Psychotherapy & Coaching
router.get('/treatments/therapy-coaching', (req, res) => {
  console.log('Psychotherapy & Coaching page requested');
  res.render('pages/treatments/therapy-coaching');
});

// Treatments - Medication
router.get('/treatments/medication', (req, res) => {
  console.log('Medication page requested');
  res.render('pages/treatments/medication');
});

// Treatments - Natural & Holistic Therapies
router.get('/treatments/natural-holistic', (req, res) => {
  console.log('Natural & Holistic Therapies page requested');
  res.render('pages/treatments/natural-holistic');
});

// Treatments - Mindfulness
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

// Resources - Professional Organizations
router.get('/resources/professional-organizations', (req, res) => {
  console.log('Professional Organizations page requested');
  res.render('pages/resources/organizations');
});

// Resources - Websites
router.get('/resources/websites', (req, res) => {
  console.log('Websites page requested');
  res.render('pages/resources/websites');
});

// Resources - Books
router.get('/resources/books', (req, res) => {
  console.log('Books page requested');
  res.render('pages/resources/books');
});

// Resources - Podcasts
router.get('/resources/podcasts', (req, res) => {
  console.log('Podcasts page requested');
  res.render('pages/resources/podcasts');
});

// Resources - YouTube
router.get('/resources/youtube', (req, res) => {
  console.log('YouTube page requested');
  res.render('pages/resources/youtube');
});

// Resources - Social Media
router.get('/resources/social-media', (req, res) => {
  console.log('Social Media page requested');
  res.render('pages/resources/social-media');
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

// Procrastination & Perfectionism
router.get('/procrastination-perfectionism', (req, res) => {
  console.log('Procrastination & Perfectionism page requested');
  res.render('pages/topics/procrastination-perfectionism');
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
