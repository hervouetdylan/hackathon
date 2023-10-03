const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const app = require('./public.src/js/App.js');

app.listen(process.env.APP_PORT || 3000,  () => {
    console.log(`App running on port ${process.env.PORT}...`);
})
