const express = require('express');
const db = require('../config/dbConn');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Auth Route");
});

router.post('/setroom', async(res, req)=>{
	
})

router.get('/getrooms', async(res, req)=>{
	
})