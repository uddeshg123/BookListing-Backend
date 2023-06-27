const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');


const userRoutes = require('./controller/books')

const db = mongoose.connect('mongodb+srv://<username>:<password>@cluster0.6khl4tg.mongodb.net/', { useNewUrlParser: true, dbName: 'bookStore' })
    .then(() => {
        console.log('connected to database');
    }).catch((err) => {
        console.log('connection failed', err);
    });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/books", userRoutes);


app.use((req, res, next) => {
    res.send('Something went wrong!')
})

module.exports = app;