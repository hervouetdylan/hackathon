const database = require("../../database")


// Read

const getAllPLace = (req, res) => {

    database
        .query("SELECT * FROM place")
        .then(([user]) => res.json(user))
        .catch((err) => res.status(500).send("Error getting data from database", err))
}



module.exports = {
    getAllPLace,

}