const express = require('express');
const app = express();

app.set('home engine', 'pug');
app.set('homes','./homes');

app.set('services engine', 'pug');
app.set('services','./services');

app.set('contactus engine', 'pug');
app.set('contactus','./contactus');

app.get('/home', function(req, res){
    res.render('home');
 });

 app.get('/services', function(req, res){
    res.render('services');
 });

 app.get('/contactus', function(req, res){
    res.render('contactus');
 });