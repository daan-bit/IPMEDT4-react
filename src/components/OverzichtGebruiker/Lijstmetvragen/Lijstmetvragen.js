import React from "react";
import axios from "axios";

class Lijstmetvragen extends React.Component{
    state = {
        vragen: [],
    }
    onderzoek = [{
      vraag0: "1",
      flag0: "1",
      vraag1: "1",
      flag1: "0",
      vraag2: "",
      flag2: "10",
      vraag3: "3",
      flag3: "0",
      vraag4: "4",
      flag4: "0",
      vraag5: "4",
      flag5: "0",
      vraag6: "2",
      flag6: "0",
      vraag7: "",
      flag7: "0",
      vraag8: "",
      flag8: "0",
      vraag9: "3",
      flag9: "1",
      vraag10: "4",
      flag10: "1",
      vraag11: "4",
      flag11: "0",
      vraag12: "2",
      flag12: "0",
      vraag13: "2",
      flag13: "1",
      vraag14: "",
      flag14: "0",
      vraag15: "",
      flag15: "0",
      vraag16: "3",
      flag16: "1",
      vraag17: "4",
      flag17: "0",
      }
    ]
    
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
        let items = ``
        this.state.vragen.forEach( (val, index) => {
          let classActive = (this.onderzoek[0]["vraag"+index] != '') ? 'active' : ''
          let classCircle = (this.onderzoek[0]["flag"+index] == '1') ? 'circle' : ''
          items += `<button class="${classActive} ${classCircle}" type="submit " ><span>${index+1}</span></button>`
        })
        return(
          <article className="lijstmetvragen">
                <h1 className="lijstmetvragen__title">Overzicht</h1>
                <p className="lijstmetvragen__subtitle">Heir bevind jouw overzicht op aantal gemaakte vragen</p>
                <br /> 
                <form className="lijstmetvragen__form" method="get" action=""> 
                  <section className="lijstmetvragen__container flex jc-sb fw-w">
                    <div dangerouslySetInnerHTML={{__html: items}} />
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