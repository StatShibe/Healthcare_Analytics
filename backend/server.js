const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3500;

const authRouter = require("./routes/auth.router");
const docRouter = require('./routes/doctors.router');

const db = require("./config/dbConn");
db.connect().then(()=>{
    console.log("Postgres database is connected!");
})

app.get('/',(req,res)=>{
    res.send("Nothing here!");
})

app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('tiny'));
app.use(cors({
    credentials: true, 
    origin: "http://localhost:5173"
}));

app.use("/auth",authRouter);
app.use("/doctor",docRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}`);
})