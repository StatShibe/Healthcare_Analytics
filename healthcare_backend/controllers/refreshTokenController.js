const client = require('../config/dbConn')
const jwt = require('jsonwebtoken');
require('dotenv').config()

const handleRefreshToken = (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;

    const query = {
        text : 'SELECT * FROM users WHERE refreshtoken = $1',
        values : [refreshToken]
    }
    const foundUser = client.query(query);
    if (foundUser.rows[0].length == 0) return res.sendStatus(403); //Unauthorized 
    // evaluate password 

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if(err || foundUser.rows[0].email !== decoded.username) return res.sendStatus(403);
            const roles = Object.values(foundUser.rows[0].role)
            const accessToken = jwt.sign(
                {"UserInfo":
                    {   "username" : decoded.username,
                        "role" : roles
                    }
                },
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn : '30s' }
            );
            res.json({ accessToken })
        }
    )
}

module.exports = { handleRefreshToken };