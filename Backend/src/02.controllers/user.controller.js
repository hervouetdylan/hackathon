const database = require("../../database")


// Create 

const createOneUser = (req, res) => {
    const { pseudo,password,name,lastname } = req.body;

    database
        .query('INSERT INTO user (pseudo, password, name, lastname) VALUES (?, ?, ?, ?)', [pseudo, password,name,lastname])
        .then(() => res.status(201).send("User created"))
        .catch((err) => res.status(500).send("Error creating a new user", err))
}


// Read

const getAllUser = (req, res) => {

    database
        .query("SELECT * FROM user")
        .then(([user]) => res.json(user))
        .catch((err) => res.status(500).send("Error getting data from database", err))
}

// Update

const updateOneUser = (req, res) => {
    const userId = Number(req.params.postersId);
    const { pseudo, password,name,lastname } = req.body;

    database
        .query('UPDATE user SET pseudo = ?, password = ?, name = ?, lastname = ? WHERE userId = ?', [pseudo, password,name,lastname, userId])
        .then(() => res.send("Poster updated"))
        .catch((err) => res.status(500).send("Error updating poster", err))
}


// Delete

const deleteOneUser = (req, res) => {
    const userId = Number(req.params.postersId);

    database
        .query('DELETE FROM user WHERE posters_id = ?', [userId])
        .then(() => res.send("User deleted"))
        .catch((err) => res.status(500).send("Error deleting user", err))
}



module.exports = {
    createOneUser,
    getAllUser,
    updateOneUser,
    deleteOneUser,
}