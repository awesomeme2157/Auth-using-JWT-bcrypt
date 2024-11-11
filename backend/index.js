const express = require("express");
const dotenv = require("dotenv");
const auth = require("./routes/auth");
const cors = require("cors");

const app = express();

dotenv.config();
require("./connection");
const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors());

app.use("/api/v1", auth);

app.get("/", (req, res) => {
    return res.end("Hello There");
});

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});
