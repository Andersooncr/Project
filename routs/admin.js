const { text } = require('body-parser');
const express = require('express');
const router = express.Router();
const Post = require('../models/Post')


router.get('/',(req,res)=>{
    res.render('admin/home')
})


router.get('/register',(req,res)=>{
    res.render('admin/form')
});

router.get('/delete/:id',(req,res)=>{
    Post.destroy({where : {'id': req.params.id}}).then(()=>{
        res.render('admin/back')
    }).catch((error)=>{
        res.send("There was an error"+ error)
    })
});

router.post('/register/new',(req,res)=>{
    Post.create({
        email: req.body.email,
        password: req.body.password
    
    }).then(()=>{
        res.redirect('/admin/')
    }).catch((error)=>{
        res.send("There was an error"+ error)
    })
});

module.exports = router