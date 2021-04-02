import React from 'react';
import 'D:/pract/react/Travel_Together/my-app/src/Style/home.css';

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
                    <form >  
                    <h1>
                      <ride>Ride & Share</ride>
                                    
                   
                    &emsp;
                    <frm>
                    <input type="text" name="user"  size="6" onChange={(e)=>{this.setState({user:e.target.value})} }placeholder="Email-Id" required></input>
                    &emsp;
                    <input type="text" name="psd" size="6" onChange={(e)=>{this.setState({psd:e.target.value})}} placeholder="password" required></input>
                    &emsp;
                   <button font-size="20" onClick={()=>this.submit()}  >LOGIN</button>
                   </frm>
                    
              </h1>
              </form>
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