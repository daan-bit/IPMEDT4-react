import React from "react";
import axios from "axios";

class Lijstmetvragen extends React.Component{
    state = {
        vragen: [],
    }
    onderzoek = [{
      vraag1: "1",
      vraag2: "",
      vraag3: "3",
      vraag4: "4",
      vraag5: "4",
      vraag6: "2",
    }]
    
    makeApiCall = event => {
        let onderzoek_id = 1;

      // onderzoek vragen gaan we hier opvragen met Api het id van het onderzoek (dit id krijgen we in de url binnen)
      const BASE_URL = "http://madebydaniek-testwebsite3.nl/api/onderzoeken/";
        axios.get(BASE_URL + 1 + "/vragen").then(res =>{
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
          <article className="lijstmetvragen">
                <h1 className="lijstmetvragen__title">Overzicht</h1>
                <p className="lijstmetvragen__subtitle">Heir bevind jouw overzicht op aantal gemaakte vragen</p>
                <br /> 
                <form className="lijstmetvragen__form" method="get" action=""> 
                  <section className="lijstmetvragen__container flex jc-sb fw-w">
                    {this.state.vragen.map(vraag => 
                        <button type="submit" >{vraag.index}</button>
                    )}
                  </section>
                  <br />  
                  <section className="lijstmetvragen__btns">
                    <div className="lijstmetvragen__btns__ruimte">
                    <button className="btn u-float-left">Start</button>
                    <button className="btn u-float-right">Finish</button>
                    </div>
                  </section>
                </form>
            </article>      
        )
        
    }
}

export default Lijstmetvragen;