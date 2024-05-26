const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const supabase = require('../config/dbConn')


const router = express.Router();
const db = require("../config/dbConn");

router.get('/',(req,res)=>{
    res.send("Auth Route");
});

router.post('/login',async(req,res)=>{
    // console.log(req.body);
    const { data, error } = await supabase.auth.signInWithPassword({
        email: req.body.email,
        password: req.body.password,
    })
    if(error){
        console.log(error);
        res.sendStatus(400).send("Invalid Login")
    }
    else{
        res.sendStatus(200)
    }
});

router.post('/register',async(req,res)=>{
    // console.log(req.body);
    const { data, error } = await supabase.auth.signUp({
        email: req.body.email,
        password: req.body.password,
        options: {
          emailRedirectTo: 'https://localhost:5173',
        },
      })
    if(error){
        console.log(error)
        res.status(400).send("User Already exists!");
    }
    else{
        res.status(200)
    }
});

router.post('/logout',async(req,res)=>{
    
    const { error } = await supabase.auth.signOut()
    if(error){
        console.log(error)
    }else{
        res.status(200).send("Logged Out");
    }
    
})


module.exports = router;