import React from "react";
import axios from "axios";

class Lijstmetvragen extends React.Component{
    state = {
        vragen: [],
    }
    
    makeApiCall = event => {
        let onderzoek_id = 1;

      // onderzoek vragen gaan we hier opvragen met Api het id van het onderzoek (dit id krijgen we in de url binnen)
      const BASE_URL = "http://127.0.0.1:8000/api/onderzoeken/";
        axios.get(BASE_URL + onderzoek_id + "/vragen").then(res =>{
          const temp = res.data;
          console.log(temp);
          this.setState({vragen:res.data})
          console.log(this.state);
        });

       
      }
  
      componentDidMount(){
          this.makeApiCall();
      }
     
   render(){
        return(
            <div>
              hello world
              {this.state.vragen.map(vraag => 
            <li>
              {vraag.id}
            </li>
          )}
        </div>
        
        )
        
    }
}

export default Lijstmetvragen;