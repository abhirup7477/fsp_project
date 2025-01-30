const express = require("express")
const cors = require("cors")
const {attachDb} =  require("./middlewires/dbMiddleware")

require("dotenv").config()

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use(attachDb)


app.use("/api/auth", require("./routes/auth/auth"))

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})