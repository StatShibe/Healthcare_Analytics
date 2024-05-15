const express = require('express');
const db = require('../config/dbConn');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Appointment Route");
});

router.post('/setappointment', async(res, req)=>{
	
})

router.get('/getappointments', async(res, req)=>{
	
})