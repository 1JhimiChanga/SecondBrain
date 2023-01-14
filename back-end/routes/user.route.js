const router = require('express').Router();
const cors = require("cors");
const User = require("../models/user.model")
const bodyParser = require("body-parser");


// Middleware

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//---------------------------END OF MIDDLEWARE--------------------------------

/*
Description: Returns a list of Users
Pre-condition: N/A
Post-conditino: Returns a list of users in the form of JSON
*/
router.route("/").get((req, res) => {
    User.UserCollection.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Error: Couldn't return list of users"));
});



/* 
Description: Takes in input to create a new user.
Pre-conditions: Requires name, username, email, password.
Post-condition: Successfully adds one new user the the User Collection.
*/
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    // Username and email are not in use
    // Now creates a new user
    const newUser = new User.UserCollection({
        username: username,
        email: email,
        password: password
    });

    // Save user to collection
    newUser.save()
        .then(() => res.json(username + " was added!"))
        .catch(err => res.status(400).json("Error: failed adding " + username + " to the database"))
});

/**
 * Validation Routes 
 * 1. Check if USERNAME exists
 * 2. Check if EMAIL exists
 * Post-condition: 
 * Exists => send "success"
 * Doesnt exist => send "exist<param>Error"
 */

router.route("/checkUsername").post((req, res) => {
    const username = req.body.username;
    // Find ONE username
    User.UserCollection.findOne({ username: username })
        .then(function (existUser) {
            if (existUser == null) {
                res.json("success")
            } else {
                res.json("existUsernameError")
            }
        })
})


router.route("/checkEmail").post((req, res) => {
    const email = req.body.email;
    // Find ONE email
    User.UserCollection.findOne({ email: email })
        .then(function (existEmail) {
            if (existEmail == null) {
                res.json("success")
            } else {
                res.json("existEmailError")
            }
        })
})
module.exports = router;