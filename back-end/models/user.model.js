const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {

        username: {
            type: String,
            unique: true,
            
        },
        email: {
            type: String,
            unique: true,
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