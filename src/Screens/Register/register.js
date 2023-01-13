import React, {useState} from 'react'
import { TextField, Typography, Grid, Button, FormGroup } from '@mui/material'
import { Form, Link } from 'react-router-dom'
import "./register_styles.css"
import Footer from "../../Components/Footer/footer"
import { addUser } from './registerAPI'

export default function Register() {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleTextChange = (textType, e ) => {
    const text = e.target.value;
    switch(textType){
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
  }

 


  return (
    <div >
      <Grid className="entireGrid" container spacing={2}>
        <Grid item md={1} />
        <Grid className='companyInfoContainer' item md={5}>
          <img src="/images/SecndBrain-removebg-preview_resize.png" alt="Wait for logo.."></img>
          <div className='companyInfoText'>
            <Typography style={{fontFamily: "Poppins"}} className='companyInfoSingleText' variant='h3'>Welcome to Your Secnd<span className="brainText">Brain</span></Typography>
            <Typography style={{fontFamily: "Poppins"}} className='companyInfoSingleText' variant='h6'>Find your second brain and be twice as productive!</Typography>
            <Button className='aboutUsButton' variant='outlined'>About Us</Button>
          </div>

        </Grid>

        <Grid item md={4} className="registerFormContainer">
          <Typography style={{ fontFamily: "Poppins", marginTop: "30px"}} variant='h2'>Register Here!</Typography>

          <FormGroup className="formGroup1">
            <TextField className='formInput'
              label="Username"
              value={username}
              onChange={(e) => handleTextChange("username", e)}
            />
            <TextField className='formInput'
              label="Email"
              value={email}
              onChange={(e) => handleTextChange("email", e)}
            />
            <TextField className='formInput'
              label="Password"
              value={password}
              onChange={(e) => handleTextChange("password", e)}
            />
            <TextField className='formInput'
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => handleTextChange("confirmPassword", e)}
             
            />

          </FormGroup>

          <Button variant='contained' className='registerButton'>Register</Button>
          <Typography>Already have an account?</Typography>
          <Link>Login now!</Link>
        </Grid>

        

      </Grid>

    <Footer />

    </div >
  )
}
