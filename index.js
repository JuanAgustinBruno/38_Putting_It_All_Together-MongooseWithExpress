const express = require('express');  
const app = express();
const path = require('path');
const mongoose = require("mongoose");

app.set('views', path.join(__dirname, 'views'));


app.set('view engine', 'ejs');

app.get("/dog", (req,res) => {
    res.send("woof!")
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})