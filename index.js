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

    //Others
        app.listen(9091,()=>{
            console.log("Server online")
        });
