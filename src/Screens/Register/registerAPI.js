import axios from "axios";

function addUser(username, email, password){

    axios.post("http://localhost:5000/user/add", {
        username : username,
        email : email,
        password : password
    })

    .then((res) => {
        if(res.data === "existUsernameError"){
            return "usernameError";
        } else if (res.data === "existEmailError"){
            return "emailError";
        } else {
            return "success"
        }
    })
    .catch((err) => console.log("Something went wrong with adding a user " + err));

}

export {addUser};