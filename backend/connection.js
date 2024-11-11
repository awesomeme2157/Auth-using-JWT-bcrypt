const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017";

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

const connection = mongoose.connection;

module.exports = connection;
