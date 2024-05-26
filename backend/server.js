const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const morgan = require("morgan");
const cron = require('node-cron');

const app = express();
const PORT = process.env.PORT || 3500;

const authRouter = require("./routes/auth.router");
const docRouter = require('./routes/doctors.router');
const roomsRouter = require("./routes/rooms.router");
const inPatientRouter = require('./routes/inpatient.router');
const appointmentRouter = require('./routes/appointments.router');
const treatmentRouter = require('./routes/treatments.router');



const db = require("./config/dbConn");


app.get('/',(req,res)=>{
    res.send("Nothing here!");
});


app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('tiny'));
app.use(cors({
    credentials: true, 
    origin: "http://localhost:5173"
}));

app.use("/auth",authRouter);
app.use("/doctor",docRouter);
app.use("/rooms",roomsRouter);
app.use("/inpatient",inPatientRouter);
app.use("/appointments",appointmentRouter);
app.use("/treatments",treatmentRouter);



app.listen(PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}`);
})