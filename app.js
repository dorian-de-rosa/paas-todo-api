require("dotenv").config()
const express = require("express")
const app = express()
app.use(express.json())

app.get("/", function (req, res) {
  res.send(`Hello World! Environement de ${process.env.ENV}`)
})

const port = process.env.PORT
app.listen(port, function () {
  console.log(`ToDo API listening on port ${port}`)
})
