const { response } = require("express");
const express = require("express");
const app = express();
const Post = require('./models/Post')
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const admin = require('./routs/admin')
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')

//Config

    //Session
        app.use(session({
            secret: "qd0VV6ETQ2yE5Jshy1uxjA",
            resave: true,
            saveUninitialized: true
        }));
        app.use(flash());
    
    //Middleware
        app.use((req,res,next)=>{
            res.locals.success_msg = req.flash('success_msg')
            res.locals.error_msg = req.flash('error_msg')
            next()
         })
    
    //Template Engine 
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

    //Body Parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());

    //Public
        app.use(express.static(path.join(__dirname,"public")));   

    //routs
        app.use('/admin', admin);

<<<<<<< HEAD
    //Others
        app.listen(9091,()=>{
            console.log("Server online")
        });
=======
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
>>>>>>> b31bbde37d0b09756a5b06128ff2987b9ac7a497
