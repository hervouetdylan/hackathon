const database = require("../../database")


// Read

const getAllCategory = (req, res) => {

    database
        .query("SELECT * FROM category")
        .then(([user]) => res.json(user))
        .catch((err) => res.status(500).send("Error getting data from database", err))
}



module.exports = {
    getAllCategory,

}