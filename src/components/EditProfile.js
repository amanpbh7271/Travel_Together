import React from 'react';


export default class Edit_Profile extends React.Component{

     constructor()
     {
        super()
        this.state={
            id:null,
        }
     }
     

      render()
      {
             return (
                <div>
                     <form>
                         <h1>Edit Profile </h1>
                         <label for="Total Member">Name</label> &emsp;
                     <input type="text" name="source"  size="20" onChange={(e)=>{this.setState({user_name:e.target.value})} }placeholder="Name" required></input><br></br>
                      <br/>
                    

                      <label for="Total Member">Mobile No</label> &emsp;
                     <input type="text" name="destination"  size="20" onChange={(e)=>{this.setState({user_name:e.target.value})} }placeholder="Mob no" required></input><br></br>
                      <br/>

                     <button font-size="20" onClick={()=>this.submit()}  > Submit</button>&emsp;
                     <button font-size="20" onClick={()=>this.submit()}  >Cancel </button><br></br>  
                   
                   
                    
                   
                     </form>

                </div>

             )

      }

}

