const client = require('../config/dbConn');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const handleLogin = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });
    console.log(user);
    const query = {
        text : 'SELECT * FROM users WHERE email = $1',
        values : [user]
    }
    const foundUser = await client.query(query);
    if (foundUser.rows.length == 0) return res.sendStatus(401); //Unauthorized 
    // evaluate password 
    const match = await bcrypt.compare(pwd, foundUser.rows[0].password);
    if (match) {
        const roles = Object.values(foundUser.rows[0].role)
        // create JWTs
        const accessToken = jwt.sign(
            {'UserInfo' : {
                    'username':foundUser.rows[0].email,
                    "roles":roles
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s'}
        );    
        const refreshToken = jwt.sign(
            {'username':foundUser.rows[0].email},
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d' }
        );   
        
        const refreshQuery = {
            text : 'UPDATE users SET refreshtoken = $1 WHERE email = $2',
            values : [refreshToken, user]
        }

        client.query (refreshQuery);

        console.log(refreshToken);
        res.cookie('jwt', refreshToken, {httpOnly : true, sameSite: 'None', secure : true, maxAge: 24 * 60 * 60 * 1000});
        res.json({ accessToken });
    } else {
        res.sendStatus(401);
    }
}

module.exports = { handleLogin };