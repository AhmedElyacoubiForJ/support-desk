const express = require('express')
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    //res.send('Hello World!')
    res.status(200).json({message: "Welcome to the Support Desk API"})
})

// Routes
app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)});