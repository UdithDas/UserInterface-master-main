//import express
const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');
//Initailizing
const app = new express();
const db = require('./Connection/Database');
const signupmodel = require('./signup');
//Api Creation
app.get('/', (request, response) => {
    response.send('hai udith');
});
//For Submit button
app.post('/', (request, response) => {
    console.log(request.body);
    new signupmodel(request.body).save();
    response.send('Signup Successfully');
});

app.listen(3000, (request, response) => {
    console.log('Port is running in 3000');
});