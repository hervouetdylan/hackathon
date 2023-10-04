require("dotenv").config();
const express = require("express")
const router = require("./src/01.navigation/routes.js")
const cors = require("cors")

const app = express()
const port = process.env.APP_PORT


app.use(express.json())
app.use(router)
app.use(cors())


app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})