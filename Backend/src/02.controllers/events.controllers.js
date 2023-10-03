const database = require("../../database")

//Create an event

const createOneEvent = (req, res) => {
    const {name, date, description, image} = req.body;

    database
        .query('INSERT INTO event (name, date, description, image) VALUES (?, ?, ?, ?)', [name, date, description, image])
        .then(() => res.status(201).send("Event created"))
        .catch((err) => res.status(500).send("Error creating a new event", err))
}


//Read all events

const getAllevents = (req, res) => {

        database 
            .query("SELECT * FROM event")
            .then(([event]) => res.json(event))
            .catch((err) => res.status(500).send("Error getting data from database", err))
}

//Update an event

const updateOneEvent = (req, res) => {
    const eventId = Number(req.params.eventId);
    const { name, date, description, image } = req.body;

    database
        .query('UPDATE event SET name = ?, date = ?, description = ?, image = ? WHERE eventId = ?', [name, date, description, image, eventId])
        .then(() => res.send("Event updated"))
        .catch((err) => res.status(500).send("Error updating event", err))
    console.log(req.body)
}

//Delete an event

const deleteOneEvent = (req, res) => {
    const eventId = Number(req.params.eventId);

    database
        .query('DELETE FROM event WHERE eventId = ?', [eventId])
        .then(() => res.send("Event deleted"))
        .catch((err) => res.status(500).send("Error deleting event", err))
}

module.exports = { 
    createOneEvent,
    updateOneEvent,
    getAllevents,
    deleteOneEvent,
}