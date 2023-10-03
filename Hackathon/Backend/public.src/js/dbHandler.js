function dbHandler (req, res) {
    res.status(200).json({ message: 'Hello from the server side!', app: 'Natours' });
}