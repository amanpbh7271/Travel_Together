import React from 'react';


export default class register extends React.Component{

     constructor()
     {
        super()
        this.state={
            user_name:null,
            addhar_no:null,
            email:null,
           password:null,
           confirm_password:null,
           mob_no:null

        }
     }


      render()
      {
             return (
                <div>
                     <form>
                         <h1>Registration </h1>
                     <input type="text" name="user"  size="20" onChange={(e)=>{this.setState({user_name:e.target.value})} }placeholder="User_name" required></input><br></br>
                      <br/>
                    
                     <input type="text" name="user"  size="20" onChange={(e)=>{this.setState({addhar_no:e.target.value})} }placeholder="Addhar_No" required></input><br></br>
                     <br/>
                     <input type="text" name="user"  size="20" onChange={(e)=>{this.setState({email:e.target.value})} }placeholder="Email-Id" required></input><br></br>
                     <br/>
                     <input type="text" name="user"  size="20" onChange={(e)=>{this.setState({password:e.target.value})} }placeholder="Password" required></input><br></br>
                     <br/>
                     <input type="text" name="user"  size="20" onChange={(e)=>{this.setState({confirm_password:e.target.value})} }placeholder="Confirm Password" required></input><br></br>
                     <br/>
                     <input type="text" name="user"  size="20" onChange={(e)=>{this.setState({mob_no:e.target.value})} }placeholder="Mobile No" required></input><br></br>
                     <br/>
                     <button font-size="20" onClick={()=>this.submit()}  >Register</button>&emsp;
                     <button font-size="20" onClick={()=>this.submit()}  >Cancel</button><br></br>  
                     </form>

                </div>

             )

      }

}

