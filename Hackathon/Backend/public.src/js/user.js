const app = require('app')
const bodyParser = require('body-parser');



app.get('/posts', (req, res) => {
    const id = req.body.id; 
});

app.get('/users', (req, res) => {
    // Get all users
});

app.get('/login', (req, res) => {
    //Authenticate user 
    const id = req.body.id;
    const password = req.body.password;
    
    //Redirect to home page

});

app.get('/password', (req, res) => {
    //Get user password
    const id = req.body.id;
});
