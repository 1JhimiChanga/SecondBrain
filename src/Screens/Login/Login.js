import React, { useState } from 'react'
import { TextField, Typography, Grid, Button, FormGroup } from '@mui/material'
import { Form, Link } from 'react-router-dom'

import "./login_styles.css"
import "../Register/register_styles.css"

export default function Login() {
  return (
    <div>
      <Grid container spacing={2} className='entireGrid'>
        <Grid item md={1} />
        <Grid item md={4} className='loginFormContainer' >
          <Typography style={{ fontFamily: "Poppins", marginTop: "30px" }} variant='h2'>Welcome Back to Your Secnd<span className='brainText'>Brain</span></Typography>
          <FormGroup className="loginFormGroup">
            <TextField className='formInput' label="Username" />
            <TextField className='formInput' label="Password" />
          </FormGroup>
          <Button className='registerButton'>Login</Button>
          <Typography>Don't have an account?</Typography>
          <Link to="/register">Register here!</Link>
        </Grid>

        <Grid className='companyInfoContainer' item md={5}>

          <div className='statementText'>

            <Typography style={{ fontFamily: "Poppins" }} className='companyInfoSingleText' variant='h4'>Never second <span className='guessText'>guess</span></Typography>
            <Typography style={{ fontFamily: "Poppins" }} className='companyInfoSingleText' variant='h2'>With Secnd<span className="brainText">Brain</span></Typography>

          </div>

        </Grid>
      </Grid>
    </div>
  )
}
