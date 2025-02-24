const {connect} = require("mongoose");

const database = async (URL) => {
    try {
        await connect(URL);
        console.log("Connection to database successful")
    }
    catch (error) {
        console.log("Error connecting to database", error)
    }
}

module.exports = database;