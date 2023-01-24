const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.get('/' , (req, res, next)=>{
    res.send('hello')
})

const port = process.env.PORT || 5000;

app.listen(port , (err) => {
    if (err) return console.log(err);
    console.log('server running onn port ' + port );
})