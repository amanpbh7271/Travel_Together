import React from 'react';


export default class Discver_Trip extends React.Component{

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
                         <h1>Discover Trip </h1>
                         <label for="Total Member">Source</label> &emsp;
                     <input type="text" name="source"  size="20" onChange={(e)=>{this.setState({user_name:e.target.value})} }placeholder="Source" required></input><br></br>
                      <br/>
                    

                      <label for="Total Member">Destination</label> &emsp;
                     <input type="text" name="destination"  size="20" onChange={(e)=>{this.setState({user_name:e.target.value})} }placeholder="Destination" required></input><br></br>
                      <br/>

                     <button font-size="20" onClick={()=>this.submit()}  > Discover Trip</button>&emsp;
                     <button font-size="20" onClick={()=>this.submit()}  >Cancel </button><br></br>  
                   
                    <h2>All Listed Trip</h2>

                   
                     </form>

                </div>

             )

      }

}

