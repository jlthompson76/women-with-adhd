const express = require('express');
const body_parser = require('body-parser');
const path = require('path');
const mongodb = require('mongodb');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'ejs');

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let db_handler;
const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;
const COLLECTION_NAME = process.env.COLLECTION_NAME;

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);

    let mongo_client = mongodb.MongoClient;
    mongo_client.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db_client) => {
        if (err) {
            console.log(`Error: ${err}`);
        } else {
            console.log(`Connected to database ${DB_NAME}`);
            db_handler = db_client.db(DB_NAME);
        }
    });
});
