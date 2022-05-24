//import express
const exp = require('constants');
const express = require('express');

//Mengimport path
const path = require('path')

//import route
const route = require('./route/route');

//inisiasi express
const app = express();

//konfigurasi port
const port = 3000;

// Template/View engine using EJS
app.set('view engine', 'ejs');

// Menjadikan direktori views sebagai 
app.set('views', path.join(__dirname, 'views'));

//Memakai folder static
app.use(express.static('public'));

//middlware built in
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));


//terapkan route di aplikasi 
app.use(route);


//Jalankan server express
app.listen(port);