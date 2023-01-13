const { modalUnstyledClasses } = require("@mui/material");
const mongoose = require("mongoose");

const Schema = mongoose.Scheme;

const userSchema = new Schema(
    {
        name: {
            type: String
        },
        username: {
            type: String
        },
        email: {
            type: String
        },
        password : {
            type: String
        },
    },
    {
        timestamps: true,
    }
);

const UserCollection = mongoose.model("Users", userSchema);
module.exports = {UserCollection, userSchema};