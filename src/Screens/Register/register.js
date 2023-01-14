import React, { useState } from 'react'
import { TextField, Typography, Grid, Button, FormGroup } from '@mui/material'
import { Form, Link } from 'react-router-dom'
import "./register_styles.css"
import Footer from "../../Components/Footer/footer"
import { addUser, checkPassword, checkUsername, checkEmail } from './registerAPI'

export default function Register() {
  //= Input States
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Error States
  const [usernameError, setUsernameError] = useState({
    error: false,
    message: ""
  })
  const [emailError, setEmailError] = useState({
    error: false,
    message: ""
  })
  const [passwordError, setPasswordError] = useState({
    error: false,
    message: ""
  })

  const handleTextChange = (textType, e) => {
    const text = e.target.value;
    switch (textType) {
      case "username":
        setUsername(text);
        break;
      case "email":
        setEmail(text);
        break;
      case "password":
        setPassword(text);
        break;
      case "confirmPassword":
        setConfirmPassword(text);
        break;
      default:
        console.log("Does not match cases.");
        break;
    }
  };

  const onSubmit = () => {
    let validated = true;
    const passwordTest = checkPassword(password, confirmPassword)

    checkUsername(username, function (response) {
      if (response === "success") {
        setUsernameError({ error: false, message: "" })
      } else {
        setUsernameError({ error: true, message: "*This username is already in use." })
        validated = false;
      }
    })

    checkEmail(email, function (response) {
      if (response === "success") {
        setEmailError({ error: false, message: "" })
      } else {
        setEmailError({ error: true, message: "*This email is already in use" })
        validated = false;
      }
    })

    if (passwordTest !== "success") {
      setPasswordError({ error: true, message: passwordTest })
      validated = false;
    } else {
      setPasswordError({ error: false, message: "" })
    }

    if (validated) {
      addUser(username, email, password)
    }

  }

  return (
    <div >
      {/*-----------Logo and Welcome Message------------ */}
      <Grid className="entireGrid" container spacing={2}>
        <Grid item md={1} />
        <Grid className='companyInfoContainer' item md={5}>
          <img src="/images/SecndBrain-removebg-preview_resize.png" alt="Wait for logo.."></img>
          <div className='companyInfoText'>
            <Typography style={{ fontFamily: "Poppins" }} className='companyInfoSingleText' variant='h3'>Welcome to Your Secnd<span className="brainText">Brain</span></Typography>
            <Typography style={{ fontFamily: "Poppins" }} className='companyInfoSingleText' variant='h6'>Find your second brain and be twice as productive!</Typography>
            <Button className='aboutUsButton' variant='outlined'>About Us</Button>
          </div>

        </Grid>
        {/*-----------Register Box------------ */}
        <Grid item md={4} className="registerFormContainer">
          <Typography style={{ fontFamily: "Poppins", marginTop: "30px" }} variant='h2'>Register Here!</Typography>

          {/*-----------Form------------ */}
          <FormGroup className="formGroup1">
            <TextField
              error={usernameError.error}
              helperText={usernameError.message}
              className='formInput'
              label="Username"
              value={username}
              onChange={(e) => handleTextChange("username", e)}
            />
            <TextField className='formInput'
              error={emailError.error}
              helperText={emailError.message}
              label="Email"
              value={email}
              onChange={(e) => handleTextChange("email", e)}
            />
            <TextField className='formInput'
              label="Password"
              value={password}
              onChange={(e) => handleTextChange("password", e)}
              type="password"
            />
            <TextField className='formInput'
              error={passwordError.error}
              helperText={passwordError.message}
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => handleTextChange("confirmPassword", e)}
              type="password"


            />
          </FormGroup>

          <Button
            onClick={onSubmit}
            variant='contained'
            className='registerButton'
          >Register</Button>
          <Typography>Already have an account?</Typography>
          <Link>Login now!</Link>
        </Grid>



      </Grid>

    </div >
  )
}
