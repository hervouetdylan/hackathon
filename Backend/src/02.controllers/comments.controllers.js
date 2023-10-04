const database = require("../../database");

//Create a comment

const createOneComment = (req, res) => {
    const { content, userId, eventId} = req.body;

    database 
        .query('INSERT INTO comment (content , userId, eventId) VALUES (?, ?, ?, ?)', [content, userId, eventId])
        .then(() => res.status(201).send("Poster comment"))
        .catch((err) => res.status(500).send("Error creating a new comment", err))

}

//Delete a comment

const deleteOneComment = (req, res) => {
    const commentId =  Number(req.params.commentId)
    
    database
        .query('DELETE  FROM comment WHERE commentId = ?', [commentId])
        .then(() => res.status(201).send("DELETE Comment"))
        .catch((err) => res.status(500).send("Error Delete a comment", err))

}



module.exports = {
    createOneComment,
    deleteOneComment,
}