const express = require("express");
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); 

require('dotenv').config();

const PORT = process.env.PORT || 4000;

app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname , 'views' , 'SignUp.html'));
});

const { postData , findOut} = require('./controller/userController')
app.post('/submit' , postData);
app.post('/logInsubmit' , findOut);


app.get('/games' , (req, res) => {
    res.sendFile(path.join(__dirname , 'views' , 'games.html'))
});

const dbconnect = require('./config/database');
dbconnect();

app.listen(PORT , () => {
    console.log(`App is render on PORT NO. ${PORT}`)
});