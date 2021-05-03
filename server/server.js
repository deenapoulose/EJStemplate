// Set express as Node.js web application
// server framework.
// To install express before using it as
// an application server by using
// "npm install express" command.
var express = require('express');
var app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');
//passing no variable to home pae simply dislay home pae
app.get('/', (req, res)=>{

    // The render method takes the name of the HTML
    // page to be rendered as input
    // This page should be in the views folder
    // in the root directory.
    res.render('home');
    
    });
//passin a variable in to html pae
app.get('/ho', (req, res)=>{

    // The render method takes the name of the HTML
    // page to be rendered as input.
    // This page should be in views folder in
    // the root directory.
    // We can pass multiple properties and values
    // as an object, here we are passing the only name
    res.render('ho', {name:'Akashdeep'});
    
    });
    
    //used to embed dynamic content to the page and is used to embed normal JavaScript. Now embedding normal JavaScript:
    app.get('/hom', (req, res)=>{

        // The render method takes the name of the html
        // page to be rendered as input.
        // This page should be in views folder
        // in the root directory.
        var data = {name:'Akashdeep',
            hobbies:['playing football', 'playing chess', 'cycling']}
        
        res.render('hom', {data:data});
        });
        
        
var server = app.listen(4000, function(){
        console.log('listining to port 4000')
    });