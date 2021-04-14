import React from 'react';
import validator from 'validator'

import '../Style/Register.css';

//import Login from './Login.js';
import {Button, Form, FormGroup} from 'react-bootstrap';
//import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';



export default class register extends React.Component{

     constructor(props)
     {
        super(props)
        this.state={
            user_name:null,
            addhar_no:null,
            email:null,
           password:null,
           confirm_password:null,
           mob_no:null,
           errors: {
            user_name: '',
            addhar_no:'',
            email: '',
            password: '',
            confirm_password:'',
           mob_no:''

          }

        };
     }
     


     handleChange = (event) => {
      event.preventDefault();
     
      const { name, value } = event.target;
      let errors = this.state.errors;
  
      switch (name) {
        case 'user_name': 
         errors.user_name=
            value.length < 5
              ? 'Name must be 5 characters long!'
              : '';
          break;
         
          case 'addhar_no': 
          errors.addhar_no =
             value.length !== 12
               ? 'Aadhar Number must be 12 digits long!'
               : '';
           break;
            
        case 'email': 
          errors.email = 
            //validEmailRegex.test(value)
            validator.isEmail(value)  
            ? ''
              : 'Email is not valid!';
          break;
        case 'password': 
          errors.password = 
            value.length < 8
              ? 'Password must be 8 characters long!'
              : '';
          break;
          case 'confirm_password': 
          errors.confirm_password = 
            this.state.password  !== value
              ? 'Confirm passowrd sholud be same!'
              : '';
            break;
            case 'mob_no': 
            errors.mob_no = 
              value.length !==10
                ? 'Mobile No must be 10 digits long!'
                : '';
            break;
            default:
          break;
      }
  
      this.setState({errors, [name]: value});
    }

     submit= event=> {


      if(this.state.errors.user_name!==''||this.state.errors.addhar_no!==''||this.state.errors.email!==''||
      this.state.errors.password!==''||this.state.errors.confirm_password!==''
      ||this.state.errors.confirm_password!==''||this.state.errors.mob_no!=='')
     {
      alert("please fill all correct form maaner ")
      event.preventDefault() 
    }
      else{

      alert(this.state.user_name +" registration sucessfully")
    
  /*   
      console.log(this.state.user_name);
     
     console.log(this.state.addhar_no);
     
     console.log(this.state.email);
     console.log(this.state.mob_no);  
     console.log(this.state.password);  
    
     console.log(this.state.confirm_password);   */
    
     event.preventDefault()
    this.props.history.push('./');
      }
   }
      render()
      {
        const {errors} = this.state;
             return (
               <div >
               <br/>
               <br/>
                 <Form className="registration-form" onSubmit={this.submit}>
                     <h1>
                         <span className="font-wight-bold">Registration</span>

                     </h1>
                    
                     <FormGroup>
               <Form.Label> Name</Form.Label> &emsp;
               <Form.Control type="text" name="user_name"   
               onChange={this.handleChange}   placeholder=" name" required/>
               
               { errors.user_name.length>0 && 
               <span 
               style={{
                
                color: 'red',
              }}
               className='error'>{errors.user_name}</span>}
               </FormGroup>
              

               <FormGroup>
               
               <Form.Label>Aadhar No</Form.Label> &emsp;
               <Form.Control type="text" name="addhar_no" 
                onChange={this.handleChange} placeholder="Aadhar" required/>

                { errors.addhar_no.length>0 && 
               <span 
               style={{
                
                color: 'red',
              }}
               className='error'>{errors.addhar_no}</span>}
               </FormGroup>
              

                 <FormGroup >    
                 
               <Form.Label>Email ID</Form.Label> &emsp; 
               <Form.Control type="email" name="email"  
               onChange={this.handleChange } placeholder="Email-Id" required />

               { errors.email.length>0 && 
               <span 
               style={{
                color: 'red',
              }}
               className='error'>{errors.email}</span>}
               </FormGroup>
              
               <FormGroup>
               <Form.Label>Password</Form.Label> &emsp;
               <Form.Control type="password" name="password"  
               onChange={this.handleChange} placeholder="password" required/>

              { errors.password.length>0 && 
               <span 
               style={{
                color: 'red',
              }}
               className='error'>{errors.password}</span>}
               </FormGroup>
            

               <FormGroup>
               <Form.Label>Confirm Password</Form.Label> &emsp;
               <Form.Control type="password" name="confirm_password"  
               onChange={this.handleChange} placeholder="confirm password" required/>

               
              { errors.confirm_password.length>0 && 
               <span 
               style={{
                color: 'red',
              }}
               className='error'>{errors.confirm_password}</span>}
               </FormGroup>
            

               <FormGroup>
               <Form.Label>Mobile No</Form.Label> &emsp;
               <Form.Control type="number" name="mob_no"  
               onChange={this.handleChange} placeholder="Mobile No" required/>

               
              { errors.mob_no.length>0 && 
               <span 
               style={{
                 color: 'red',
              }}
               className='error'>{errors.mob_no}</span>}
               </FormGroup>
          

               
               <Button variant = "Primary" type="submit" className="btn btn-primary" >Registration</Button>
               &emsp;
               <Button variant = "Primary" type="reset" className="btn btn-primary" >Reset</Button>
               
               <br/><br/>
                          If already registered? <Link to = "/"> Log In </Link>

              </Form>

              
           </div>

             )

      }

}

