const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const db = require('../config/dbConn');

const router = express.Router();


router.get('/all',async(req,res)=>{
    const data = await db.query('SELECT DOCTOR_ID,NAME, SPECIALIZATION, AVAILABILITY FROM DOCTORS');
    res.status(200).send(data.rows);
});



module.exports = router;