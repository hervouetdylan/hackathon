require("dotenv").config();
const express = require("express")
const router = require("./src/01.navigation/routes.js")
const cors = require("cors")

const app = express()


app.use(express.json())

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);
app.use(router)
const port = parseInt(process.env.APP_PORT ?? "6000", 10);


app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    // eslint-disable-next-line no-restricted-syntax
    console.log(`Server is listening on ${port}`);
  }
});
