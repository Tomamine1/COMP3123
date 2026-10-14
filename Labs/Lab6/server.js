/* Purpose

Set up the path for the root /
Set up the middleware for JSON and URLencoding
Set up the path for the NotesRoutes

 */

const express = require("expres")
const express = require("mongoose")
const notesRoutes = require("./routes/notesRoutes.js")

const PORT = process.env.PORT || 8081
const DB_URL = "mongodb+srv://mohamedamineouatar_db_user:IaCpIzBogjCkqVcq@week06cluster.ddgqdpa.mongodb.net/"

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true }))

// Set up the route to the root / path
app.get("/", (request, response) => {
    response.send("<h1>Welcome to the root path of the server")
})


// Set up our route to routes set up in the routes/NotesRoute.js file
app.use("/api", notesRoutes)

// Set up the connection to the MongoDB using our connection string
// and mongoose framework
mangoose.connect(DB_URL)
    .then(() => {
        console.log("Successfully connected to the MangoDB Atlas server")
        app.listen(PORT, () => {
            console.log(`Server listening at port: ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
        console.log("Could not connect to the MangoDB server")
        process.exit()
    })