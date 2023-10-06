const database = require("../../database")


const getAllLike = (req, res) => {

    database
        .query("SELECT * FROM like")
        .then(([user]) =>{ res.json(user)})
        .catch((err) => res.status(500).send("Error getting data from database", err))
}

const updateOneLike = (req, res) => {
    const idlike_iduser = Number(req.params.userId); 
    const idlike_idevent = Number(req.params.eventId); 
    const { pseudo} = req.body;

    database
        .query('UPDATE like SET nb_like = ? lastname = ? WHERE idlike_iduser = ? , idlike_idevent = ?', [pseudo, password, idlike_iduser,idlike_idevent]) 
        .then(() =>{ res.send("User updated")})
        .catch((err) => {res.status(500).send("Error updating user", err)}) 
}



module.exports = {
    getAllLike,
    updateOneLike,
}