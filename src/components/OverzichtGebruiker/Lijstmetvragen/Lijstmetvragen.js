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
          <div className="lijstmetvragen">
                <h1 className="lijstmetvragen__title">Overzicht</h1>
                <p className="lijstmetvragen__subtitle">Heir bevind jouw overzicht op aantal gemaakte vragen</p>
                <br /> 
                <form className="lijstmetvragen__form" method="get" action=""> 
                  <div className="lijstmetvragen__container flex jc-sb fw-w">
                    <input type="text" name="val[]" value="1" />
                    <input type="text" name="val[]" value="2" />
                    <input type="text" name="val[]" value="4" />
                    <input type="text" name="val[]" value="1" />
                    <input type="text" name="val[]" value="10" />
                    <input type="text" name="val[]" value="1" />
                    <input type="text" name="val[]" value="1" />
                    <input type="text" name="val[]" value="1" />
                    <input type="text" name="val[]" value="10" />
                    <input type="text" name="val[]" value="1" />
                    <input type="text" name="val[]" value="1" />
                    <input type="text" name="val[]" value="1" />
                    <input type="text" name="val[]" value="10" />
                    <input type="text" name="val[]" value="1" />
                    <input type="text" name="val[]" value="1" />
                    <input type="text" name="val[]" value="1" />
                    <input type="text" name="val[]" value="10" />
                    <input type="text" name="val[]" value="1" />
                    <input type="text" name="val[]" value="1" />
                    <input type="text" name="val[]" value="1" />
                    <input type="text" name="val[]" value="10" />
                    <input type="text" name="val[]" value="1" />
                    <input type="text" name="val[]" value="1" />
                    <input type="text" name="val[]" value="1" />
                    <input type="text" name="val[]" value="10" />
                    <input type="text" name="val[]" value="1" />
                    <input type="text" name="val[]" value="1" />
                    <input type="text" name="val[]" value="1" />
                    <input type="text" name="val[]" value="10" />
                    <input type="text" name="val[]" value="1" />
                  </div>
                  <br />  
                  <div className="lijstmetvragen__btns">
                    <button className="btn">Start</button>
                    <button className="btn">Finish</button>
                  </div>
                </form>
            </div>
        //     <div>
        //       hello world
        //       {this.state.vragen.map(vraag => 
        //     <li>
        //       {vraag.id}
        //     </li>
        //   )}
        // </div>
        
        )
        
    }
}

export default Lijstmetvragen;