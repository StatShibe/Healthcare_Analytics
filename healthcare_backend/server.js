const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions')
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const { verify } = require('crypto');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const client = require('./config/dbConn');
const PORT = process.env.PORT || 3500;

try{
    client.connect();
    console.log('Connected with Postgress successfully');
}
catch(err){
    console.log(err);
}
/*
const result = client.query('select * from users', (err, res) => {
    if(!err){
        console.log(res.rows);
        if(res.rows.length == 0){
            console.log('it is empty');
        }
    }
    else{
        console.log(err.message);
    }
    client.end;
})
*/
// custom middleware logger
app.use(logger);

app.use(credentials);
// Cross Origin Resource Sharing

app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data
// in other words, form data:  
// ‘content-type: application/x-www-form-urlencoded’
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

app.use(cookieParser());

//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

// routes
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/api/register'));
app.use('/auth', require('./routes/api/auth'));
app.use('/refresh', require('./routes/api/refresh'));
app.use('/logout', require('./routes/api/logout'));

app.use(verifyJWT)
app.use('/employees', require('./routes/api/employees'));

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ "error": "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));