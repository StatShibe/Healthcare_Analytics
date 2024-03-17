const client = require('../config/dbConn');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });
    // check for duplicate usernames in the db
    const duplicateQuery = {
        text : 'SELECT email, password FROM users WHERE email = $1',
        values : [user]
    }
    const duplicate = await client.query(duplicateQuery);
    if (duplicate.rows.length != 0) return res.sendStatus(409); //Conflict 
    try {
        //encrypt the passwor
        const hashedPwd = await bcrypt.hash(pwd, 10);
        //store the new user

        const query = 'INSERT INTO users VALUES ($1, $2, $3, $4)';
        const values = [user, hashedPwd, 1001, 0 ];

        client.query(query, values, (err, result) => {
            if(err){
                console.log(err);
            }
            else{
                console.log(result.rows)
            }
        })    
        const result = await client.query(query);
        console.log(result.rows);
        res.status(201).json({ 'success': `New user ${user} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };