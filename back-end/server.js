const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")

require('dotenv').config();

//Express server
const app = express();
const port = process.env.PORT || 5000;

//Middleware 
app.use(
    cors({
        //This is part of the user session info storage
        origin: "http://localhost:3000", // <-- location of the react app we are connecting to
        credentials: true,
    })
);
app.use(express.json());

//Something we have to get from the MongoDB dashboard
//ATLAS_URI = Environment VARIABLE


//URI is where our database is stored
//how we start our connection

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});


//Routes
const userRouter = require("./routes/user.route");

app.use("/user", userRouter);

//starts the server
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
})