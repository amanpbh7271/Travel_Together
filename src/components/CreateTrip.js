import React from 'react';


export default class CreateTrip extends React.Component{

     constructor()
     {
        super()
        this.state={
            total_member:null,
            author_name:null,
            source:null,
            destinaion:null,
            no_of_requires_member:null,
            status:null,
            date:null,
            time:null
        }
     }


      render()
      {
             return (
                <div>
                     <form>
                         <h1>Create Trip </h1>
                         <label for="Total Member">Total Member</label> &emsp; &emsp; &emsp;&emsp;&emsp;
                     <input type="text" name="user"  size="20" onChange={(e)=>{this.setState({user_name:e.target.value})} }placeholder="Total Member" required></input><br></br>
                      <br/>

                      <label for="Author Name">Author Name</label>&emsp; &emsp; &emsp; &emsp;&emsp;
                     <input type="text" name="user"  size="20" onChange={(e)=>{this.setState({addhar_no:e.target.value})} }placeholder="Addhar_No" required></input><br></br>
                     <br/>
                     <label for="Source">Source</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                     <input type="text" name="user"  size="20" onChange={(e)=>{this.setState({email:e.target.value})} }placeholder="Email-Id" required></input><br></br>
                     <br/>
                     <label for="Destination">Destinaion</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                     <input type="text" name="user"  size="20" onChange={(e)=>{this.setState({password:e.target.value})} }placeholder="Password" required></input><br></br>
                     <br/>
                     <label for="No of Required Member">No of Required Member</label>&emsp;&emsp;
                     <input type="text" name="user"  size="20" onChange={(e)=>{this.setState({confirm_password:e.target.value})} }placeholder="Confirm Password" required></input><br></br>
                     <br/>
                     <label for="Status">Status</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                     <input type="text" name="user"  size="20" onChange={(e)=>{this.setState({mob_no:e.target.value})} }placeholder="Mobile No" required></input><br></br>
                     <br/>
                     <label for="Date">Date</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                     <input type="date"  name="date" size="20"></input><br/>
                     <br/>
                     <label for="Time">Time</label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                     <input type="time"  name="time" size="20"></input><br/>
                     <br/>
                     <button font-size="20" onClick={()=>this.submit()}  >Create Trip</button>&emsp;
                     <button font-size="20" onClick={()=>this.submit()}  >Cancel Trip</button><br></br>  
                     </form>

                </div>

             )

      }

}

