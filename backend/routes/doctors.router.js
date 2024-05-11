const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const db = require('../config/dbConn');

const router = express.Router();


router.get('/all',async(req,res)=>{
    const data = await db.query('SELECT USER_ID,NAME, SPECIALIZATION, YEARS_EXPR, GENDER, ON_DUTY FROM DOCTORS');
    res.status(200).send(data.rows);
});

router.get('/on-duty',async(req,res)=>{
    const data = await db.query('SELECT USER_ID,NAME, SPECIALIZATION, YEARS_EXPR, GENDER, ON_DUTY FROM DOCTORS WHERE ON_DUTY=$1 AND EMP_IND=$2',['Y','Y']);
    res.status(200).send(data.rows);
});



module.exports = router;