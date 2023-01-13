const router = require('express').Router();
const cors = require("cors");
const User = require("../models/user.model")
const bodyParser = require("body-parser");


// Middleware

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : true }));

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
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    User.UserCollection.findOne({username : username})
    .then(function(existUser) {
        // If username is not in use, check if email is
        if(existUser == null){
            User.UserCollection.findOne({email : email})
            .then(function(existEmail) {
                if(existEmail == null){
                    // Username and email are not in use
                    // Now creates a new user
                    const newUser = new User.UserCollection({
                        name : name,
                        username : username,
                        email : email,
                        password : password
                    });
                    
                    // Save user to collection
                    newUser.save()
                    .then(() => res.json(username + " was added!"))
                    .catch(err => res.status(400).json("Error: failed adding " + username + " to the database"))
                } else {
                    res.json("existEmailError")
                }
            })
        } else {
            res.json("existUsernameError")
        }
    })
    
    

});

module.exports = router;