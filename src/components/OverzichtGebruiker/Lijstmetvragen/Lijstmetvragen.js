import React from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link
} from "react-router-dom";

class Lijstmetvragen extends React.Component{
    state = {
        vragen: [],
        bericht: '',
        //Alex - elke antwoord moet een STRING ZIJN
        vragen_id: localStorage.getItem('quests'),
        antwoorden: localStorage.getItem('antworden').split(',')
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
        let onderzoek_id = localStorage.getItem('onderzoek_id');

      // onderzoek vragen gaan we hier opvragen met Api het id van het onderzoek (dit id krijgen we in de url binnen)
      const BASE_URL = "http://madebydaniek-testwebsite3.nl/api/onderzoek/";
        axios.get(BASE_URL + onderzoek_id + "/vragen").then(res =>{
          const temp = res.data;
          console.log(temp);
          this.setState({vragen:res.data})
        });
      }

      
       dataVersturen = () => {
         //Alex - we maken een for loop om door de antwoorden en vragen heen te loopen, zodat we 1 voor 1 een antwoord kunnen opslaan
        for(let i=0; i<this.state.antwoorden.length; i++) {
          const BASE_URL = "http://localhost:8000/api/antwoord/store";
          const data = {vraag_id: this.state.vragen_id.split(',')[i], antwoord:this.state.antwoorden[i] };
          console.log(data);
          axios.post(BASE_URL, data)
          .then(res => { 
            console.log(res);
            localStorage.clear(); // we cleanen de localStorage, de user gaat nu naar de homepagina
            setTimeout(function () {
          }, 5000);
          this.props.history.push("/start-test/");
        }).catch(e => this.setState({message: e.response.data}));
          }
        }
  
      componentDidMount(){
          this.makeApiCall();
      }


      handleForm = (e) => {
        e.preventDefault();
        this.dataVersturen();
   
    }

    
     
   render(){
        const bericht = this.state.bericht;
        let items = ``
        this.state.vragen.forEach( (val, index) => {
          let classActive = (this.onderzoek[0]["vraag"+index] != '') ? 'active' : ''
          let classCircle = (this.onderzoek[0]["flag"+index] == '1') ? 'circle' : ''
          items += `<a href="/vragen/1/${index + 1}" class="${classActive} ${classCircle}" type="submit " ><span>${index+1}</span></a>`
        })
        return(
          <article className="lijstmetvragen">
                <h2 className="lijstmetvragen__title">Overzicht</h2>
                <p className="lijstmetvragen__subtitle">Hier bevind jouw overzicht op aantal gemaakte vragen</p>
                
                <br /> 
                <form className="lijstmetvragen__form" method="get" action=""> 
                  <section className="lijstmetvragen__container flex jc-sb fw-w">
                    <div dangerouslySetInnerHTML={{__html: items}} />
                  </section>
                  </form>
                  <h2>{bericht}</h2>
                  <br />  
                  <section className="lijstmetvragen__btns">
                    <div className="lijstmetvragen__btns__ruimte">
                      <Link to={"/vragen/" + localStorage.getItem('onderzoek_id') + "/1"}><button className="btn u-float-left">Start</button></Link>
                      <form onSubmit={this.handleForm}>
                        <input type="submit" className="btn u-float-right"></input>
                      </form>
                    </div>
                  </section>
            </article>      
        )
        
    }
}

export default withRouter(Lijstmetvragen);