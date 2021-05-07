import React from 'react';
import '../Style/Login.css';

import {Button, Form, FormGroup} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
//import welcome from './welcome.js'
export default class Login extends React.Component{

    constructor(props)
    {
        super(props)
        const token = localStorage.getItem("token")
       
        let isLoggedIn = true
        if (token === null){
            isLoggedIn = false
        }
        this.state={
             
            user:null,
            psd:null,
            isLoggedIn 
        }

        //this.submit = this.submit.bind(this)
        //this.onChange = this.onChange.bind(this)
    }
   
    submit = event=> {
      //  console.warn(this.state)
      
      //alert("submiision scuusfull")
     
      // if(this.state.user==null||this.state.psd==null)
      // alert(" please fill form")
      // else
      // alert(" your login sucessfully")
      event.preventDefault()
      const {user, psd} = this.state
      if (user === "kedawat05@gmail.com" && psd === "12345"){
        localStorage.setItem("token", "Nileshgupta ")
        
        this.setState({
          isLoggedIn : true
        })
      }
    }

    

      render()
      {
        if (this.state.isLoggedIn){
          return <Redirect to = "/welcome" />
        }
             return (
                 
                <div >
                    <br/>
                    <br/>
                      <Form className="login-form" onSubmit={this.submit}>
                          <h1>
                              <span className="font-wight-bold">LOGIN</span>

                          </h1>
                         
                      <FormGroup >    
                      
                    <Form.Label>Email ID</Form.Label> &emsp; 
                    <Form.Control type="email" name="user" 
                     onChange={(e)=>{this.setState({user:e.target.value})} }
                     
                     
                     placeholder="Email-Id" required />
                    </FormGroup>
                    &emsp;
                    <FormGroup>
                    <Form.Label>Password</Form.Label> &emsp;
                    <Form.Control type="password" name="psd"  
                    onChange={(e)=>{this.setState({psd:e.target.value})}} placeholder="password" required/>
                    </FormGroup>
                    &emsp;
                    <br/>
                    <Button variant = "Primary" type="submit" className="btn btn-primary" >Log In</Button>
                    &emsp;
                    <Button variant = "Primary" type="reset" className="btn btn-primary" >Cancel</Button>

                    <br/><br/>
                          Need an account ? <Link to = "/register"> Sign up </Link>
                   </Form>

                   
                 
 
                </div>

             )

      }

}

