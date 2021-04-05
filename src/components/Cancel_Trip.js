import React from 'react';


export default class Cancel_Trip extends React.Component{

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
                         <h1>Cancel Trip </h1>
                         <label for="Id">Enter Id</label> &emsp;
                     <input type="text" name="id"  size="20" onChange={(e)=>{this.setState({user_name:e.target.value})} }placeholder="Id" required></input><br></br>
                      <br/>
                    
                     <button font-size="20" onClick={()=>this.submit()}  >Cancel Trip</button>&emsp;
                     <button font-size="20" onClick={()=>this.submit()}  >Cancel </button><br></br>  
                     </form>

                </div>

             )

      }

}

