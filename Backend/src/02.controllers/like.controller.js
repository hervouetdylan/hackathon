const database = require("../../database")


const getAllLike = (req, res) => {

    database
        .query("SELECT * FROM like")
        .then(([user]) =>{ res.json(user)})
        .catch((err) => res.status(500).send("Error getting data from database", err))
}

const updateOneLike = (req, res) => {
    const userId = Number(req.params.userId); 
    const { pseudo, password} = req.body;

    database
        .query('UPDATE like SET pseudo = ?, password = ?, name = ?, lastname = ? WHERE idlike_iduser = ?', [pseudo, password, userId]) 
        .then(() =>{ res.send("User updated")})
        .catch((err) => {res.status(500).send("Error updating user", err)}) 
}



module.exports = {
    getAllLike,
    updateOneLike,
}