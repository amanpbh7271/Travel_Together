import React from 'react';
import '../Style/Home.css';

import 'bootstrap/dist/css/bootstrap.min.css'

import {Button, Form} from 'react-bootstrap'


export default class home extends React.Component
{
    constructor()
    {
        super()
        this.state={
                     
            user:null,
            psd:null
        }
    }

    submit()
    {
      //  console.warn(this.state)
      
      //alert("submiision scuusfull")
      if(this.state.user==null||this.state.psd==null)
      alert(" please fill form")
      else 

      alert(this.state.user +" your login sucessfully")

    }
    render()
    {
        return (
            <div>
                 <div class="header">
                    <Form >  
                    <h1>
                      <ride>Ride & Share</ride>
                      <Button variant="primary">SIGN IN</Button>{' '} 
                      
                    &emsp;
                   
              </h1>
              </Form>
                 </div>
         
          <div id="trip_mangement">
              
          <br></br><br></br>
          <a href="Discover Trip">Discover Trip</a> <br></br><br></br>
          <a href="Join Trip">Join Trip</a><br></br><br></br>
          <a href="Create Trip">Create Trip</a><br></br><br></br>
          <a href="Cancel Trip">Cancel Trip</a><br></br><br></br>

          <br></br>
          </div>

          </div>

        )
        }
    }