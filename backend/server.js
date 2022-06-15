const express = require("express");
const connectDB = require("./config/db_connect");
const PORT = process.env.PORT;
const app = express();
connectDB();
app.use(express.json());
app.use("/api/users", require("./Routes/users"));

app.listen(PORT, (err) => {
    err
        ?
        console.log(err) :
        console.log(`server is up and running on port ${PORT}`);
});