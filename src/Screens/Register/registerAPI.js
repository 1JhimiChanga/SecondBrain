import axios from "axios";

/**
 * @description - Adds the user the database. 
 * @param {String} thisUsername - Validated username of the user.
 * @param {String} thisEmail - Validated email of the user.
 * @param {String} thisPassword - Validated password of the user.
 */
function addUser(thisUsername, thisEmail, thisPassword) {
    // Request to add user to database
    axios.post("http://localhost:5000/user/add", {
        username: thisUsername,
        email: thisEmail,
        password: thisPassword
    })
        // If successful, console log to say so
        // If error, log the error
        .then((res) => {
            console.log("User was added to DB");
        })
        .catch((err) => console.log("Something went wrong with adding a user " + err));

}


/**
 * @description - Checks the validation of the password
 * 1. If password is blank.
 * 2. At least 8 characters.
 * 3. Passes regex (at least one number)
 * 4. If both params match.
 * @param {String} password -  The first password input.
 * @param {String} confirmPassword - The second password input.
 * @returns {String} A message defining the results of the testing.
 */

function checkPassword(password, confirmPassword) {
    const passwordRegex = /(?=.*[0-9])/;
    if (!password) {
        return "*Required"
    } else if (password.length < 8) {
        return "*Password must be 8 characters long."
    } else if (!passwordRegex.test(password)) {
        return "*Invalid password. Must contain one number.";
    } else if (password !== confirmPassword) {
        return "*Passwords do not match."
    } else {
        return "success"
    }
}

/**
 * @description - A message that says "success" if username DOES NOT OR "existUsernameError" if the username DOES exists.
 * @param {String} thisUsername - The username of the user.
 * @param {Callback Function} callback - The callback function that will be used to make use of the response.
 * 
 */
const checkUsername = function (thisUsername, callback) {
    axios.post("http://localhost:5000/user/checkUsername", {
        username: thisUsername
    })
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => console.log("Something went wrong with checking the username."))
}

// checkUsername("JimbobSherwood", function (response) {
//     alert(response)
// })

/**
 * @description - A message that says "success" if email DOES NOT OR "existEmailError" if the email DOES exists.
 * @param {String} thisEmail - The email of the user.
 * @param {Callback Function} callback - The callback function that will be used to make use of the response.
 */
const checkEmail = function (thisEmail, callback) {
    axios.post("http://localhost:5000/user/checkUsername", {
        email: thisEmail
    })
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => console.log("Something went wrong with checking the email."))
}


export { addUser, checkPassword, checkUsername, checkEmail };