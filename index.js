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

    app.get('/',function(req,res){
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts : posts})
        }).catch(function(error){
            res.send("There was an error"+ error)
        })
    });

    app.get('/cad', function(req,res){
        res.render('form')
    });

    app.get('/delete/:id',function(req,res){
        Post.destroy({where : {'id': req.params.id}}).then(function(){
            res.render('back')
        }).catch(function(error){
            res.send("There was an error"+ error)
        })
    });

    app.post('/sended', function(req,res){
        Post.create({
            title: req.body.title,
            contents: req.body.contents
        
        }).then(function(){
            res.redirect('/')
        }).catch(function(error){
            res.send("There was an error"+ error)
        })
    });

    app.listen(9091,function(){
        console.log("Server online")
    });