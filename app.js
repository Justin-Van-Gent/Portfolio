const express = require("express");
const https = require('https');
const ejs = require("ejs")

const app = express();

//set ejs a view engine
app.set('view engine', 'ejs');

//Custom CSS
app.use(express.static('Public'));

//Home page
app.get("/", (req, res) => {
    res.render("home", {

    });
});


//About page
app.get("/projects", (req, res) => {
    res.render("projects", {

    })
})

//Contact page
app.get("/contact", (req, res) => {
    res.render("contact", {
        
    })
})

//Local host 
app.listen(3000, () => {
    console.log("Server is running on Port 3000.");
})

