const express = require("express");
const app = express();
app.use(express.json())

const database = require("./src/database/database");
const User = require("./src/models/user");

require("dotenv").config({
    path: "./src/config/.env"
});

const PORT = process.env.PORT;
const URL = process.env.URL;

app.get("/", (request, response) => {
    response.send("Nah");
})

app.listen(PORT, async (request, response) => {
    try {
        database(URL);
        console.log(`App is running at port ${PORT}`)
    }
    catch (error) {
        console.log(error)
    }
})

app.use(User);

// console.log(app)

app.post("/Signup", async (request, response) => {
    try {
        const info = request.body;
        await User.save();

        response.send(info)
    }
    catch (error) {
        console.log(error)
    }
})