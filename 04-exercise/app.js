const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const users = [];
const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.render('home', {
    pageTitle: 'Home'
  });
});

app.get('/users', (req, res, next) => {
  res.render('user', {
    pageTitle: 'Users',
    usersArr: users
  });
});

app.post('/add-user', (req, res, next) => {
  console.log(req.body);
  users.push( { user: req.body.user } );
  res.redirect('/users');
});



app.listen(3000);