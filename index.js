const { response } = require("express");
const express = require("express");
const app = express();
const Post = require('./models/Post')
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

//Config
    //Template Engine

    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    //Body Parser

    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    //routs

    app.get('/cad', function(req,res){
        res.render('form')
    });

    app.post('/sended', function(req,res){
        Post.create({
            title: req.body.title,
            contents: req.body.contents
        
        }).then(function(){
            res.send("Post created successfully")
        }).catch(function(){
            res.send("There was an error"+ Error)
        })
    });

    app.listen(9091,function(){
        console.log("Server online")
    });