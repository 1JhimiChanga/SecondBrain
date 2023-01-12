import React from 'react'
import { TextField, Typography, Grid, Button, FormGroup } from '@mui/material'
import { Form } from 'react-router-dom'
import "./register_styles.css"

export default function Register() {
  return (
    <div id="content" >
      <Grid container spacing={2}>
        <Grid item md={1} />
        <Grid className='companyInfoContainer' item md={5}>
          <img src="/images/SecndBrain-removebg-preview_resize.png" alt="Wait for logo.."></img>
          <div style={{ fontFamily: "Poppins" }} className='companyInfoText'>
            <Typography className='companyInfoSingleText' variant='h3'>Join Us</Typography>
            <Typography className='companyInfoSingleText' variant='h6'>Find your second brain and be twice as productive!</Typography>
            <Button className='aboutUsButton' variant='outlined'>About Us</Button>
          </div>

        </Grid>

        <Grid item md={4} className="registerFormContainer">
          <Typography style={{ fontFamily: "Poppins" }} variant='h2'>Register Here!</Typography>

          <FormGroup>
            <TextField className='formInput'
              label="Name"
            />
            <TextField className='formInput'
              label="Username"
            />
            <TextField className='formInput'
              label="Email"
            />
            <TextField className='formInput'
              label="Password"
            />

          </FormGroup>
          <Button variant='contained' className='registerButton'>Register</Button>
        </Grid>

      </Grid>



    </div >
  )
}
