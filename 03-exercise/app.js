const express = require('express');
const path = require('path');

const app = express();

console.log('__dirname = ', __dirname);
console.log('path.join = ', path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));

const usersRoute = require('./routes/user');
const homeRoute = require('./routes/home')

app.use(usersRoute);
app.use(homeRoute)

app.listen(3000);