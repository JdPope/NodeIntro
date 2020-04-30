const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.get("/", (request,response) => {
    response.send("Hi!")
})

const port = process.env.port || 4000

app.listen(port, () => console.log(`Im listening on port ${port}`))