import React from "react";
import axios from "axios";

class Lijstmetvragen extends React.Component{
    state = {
        vragen: [],
    }
    
    makeApiCall = event => {
        let onderzoek_id = 1;

      // onderzoek vragen gaan we hier opvragen met Api het id van het onderzoek (dit id krijgen we in de url binnen)
      const BASE_URL = "http://madebydaniek-testwebsite3.nl/api/onderzoeken/";
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
          <article className="lijstmetvragen">
                <h1 className="lijstmetvragen__title">Overzicht</h1>
                <p className="lijstmetvragen__subtitle">Heir bevind jouw overzicht op aantal gemaakte vragen</p>
                <br /> 
                <form className="lijstmetvragen__form" method="get" action=""> 
                  <section className="lijstmetvragen__container flex jc-sb fw-w">
                    <button type="submit" >1</button>
                    <button type="submit" >2</button>
                    <button type="submit" >3</button>
                    <button type="submit" >4</button>
                    <button type="submit" >1</button>
                    <button type="submit" >2</button>
                    <button type="submit" >3</button>
                    <button type="submit" >4</button>
                    <button type="submit" >1</button>
                    <button type="submit" >2</button>
                    <button type="submit" >3</button>
                    <button type="submit" >4</button>
                    <button type="submit" >1</button>
                    <button type="submit" >2</button>
                    <button type="submit" >3</button>
                    <button type="submit" >4</button>
                    <button type="submit" >1</button>
                    <button type="submit" >2</button>
                    <button type="submit" >3</button>
                    <button type="submit" >4</button>
                    <button type="submit" >1</button>
                    <button type="submit" >2</button>
                    <button type="submit" >3</button>
                    <button type="submit" >4</button>
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