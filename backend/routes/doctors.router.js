const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const db = require('../config/dbConn');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Doctors Route");
});

router.get('/all',async(req,res)=>{
    const data = await db.query("SELECT USER_ID,NAME, EMAIL, SPECIALIZATION, YEARS_EXPR, GENDER, ON_DUTY FROM DOCTORS WHERE ON_DUTY = $1",['Y']);
    res.status(200).send(data.rows);
});

router.post('/register',async(req,res)=>{

    const result = await db.query('SELECT * from doctors where email = $1',[req.body.email]);
    if(result.rows.length==0){
        const doctorQuery = await db.query("insert into doctors(name,email,specialization,on_duty) values($1,$2,$3,$4);",[req.body.doctorname,req.body.email,req.body.specialization,req.body.availability]);
        res.sendStatus(200)
    }
    else{
        res.sendStatus(400).send("Doctor Already exists!");
    }
});

router.get('/on-duty',async(req,res)=>{
    const data = await db.query('SELECT USER_ID,NAME, SPECIALIZATION, YEARS_EXPR, GENDER, ON_DUTY FROM DOCTORS WHERE ON_DUTY=$1 AND EMP_IND=$2',['Y','Y']);
    res.status(200).send(data.rows);
});



module.exports = router;