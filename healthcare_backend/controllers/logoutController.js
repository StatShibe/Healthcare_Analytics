const client = require('../config/dbConn')

const handleLogout = async(req, res) => {

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204);
    const refreshToken = cookies.jwt;

    const query = {
        text : 'SELECT * FROM users WHERE refreshtoken = $1',
        values : [refreshToken]
    }
    const foundUser = await client.query(query);
    console.log(foundUser.rows)
    if (foundUser.rows.length == 0) {
        res.clearCookie('jwt', { httpOnly : true, sameSite: 'None', secure: true})
        return res.sendStatus(204);
    }; //Unauthorized 

    const refreshDel = {
        text : 'UPDATE users SET refreshtoken = $1 WHERE email = $2',
        values : ['0', foundUser.rows[0].email]
    }

    client.query(refreshDel);
    
    res.clearCookie('jwt', {httpOnly: true, sameSite: 'None', secure: true});
    res.sendStatus(204);
}

module.exports = { handleLogout };