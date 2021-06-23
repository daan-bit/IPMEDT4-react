import React from "react";
import axios from "axios";

class Lijstmetvragen extends React.Component{
    state = {
        vragen: [],
        onderzoek_id: 1,
    }
    onderzoek = [{}]
    

    constructor(props) {
      super(props);

      let LS = localStorage.getItem('ans')
      if(LS) {
        LS.split(',').forEach( (val, index) => {
          if(val.split('vraag')[1] !== '') 
            this.onderzoek[0]["vraag"+index] = val.split('vraag')[1]
          
        })
      }
      console.log(this.onderzoek);
  

      
  } 
    makeApiCall = event => {
      // onderzoek vragen gaan we hier opvragen met Api het id van het onderzoek (dit id krijgen we in de url binnen)
      const BASE_URL = "http://ipmedt4/api/onderzoek/";
      axios.get(BASE_URL + this.state.onderzoek_id + "/vragen").then(res =>{
        const temp = res.data;
        console.log('hier',temp);
        this.setState({vragen:res.data})
    
      });
    }

    saveApiCall = data => {
      // onderzoek vragen gaan we hier opvragen met Api het id van het onderzoek (dit id krijgen we in de url binnen)
      const BASE_URL = "http://127.0.0.1/api/antwoorden/";
      axios.post(BASE_URL, { list:data }).then(res => {
        console.log(res)
      })
    }
  
      componentDidMount(){
          this.makeApiCall();
      }

      startonderzoek = e => {
        e.preventDefault()
        localStorage.removeItem('ans')
        window.location.href = '/vragen/1'
      }

        
      save = e => {
        e.preventDefault()
        let data = []
        let ANS = localStorage.getItem('ans')
        let QUE = localStorage.getItem('quests')
        
        if(!ANS) return alert('Answers Empty!')
        ANS = ANS.split(',')

        QUE.split(',').forEach( (val, index) => {
          data.push({
            antwoord: ANS[index].split('vraag')[1],
            vraag_id: val
          })
        })

        this.saveApiCall(data)
      }

     
   render(){
   
        let items = ``
        this.state.vragen.forEach( (val, index) => {
          let classActive = (this.onderzoek[0]["vraag"+index]) ? 'active' : ''
          items += `<a href="/vragen/1/${index + 1}" class="${classActive}" type="submit " ><span>${index+1}</span></a>`
        })
        return(
          <article className="lijstmetvragen">
                <h2 className="lijstmetvragen__title">Overzicht</h2>
                <p className="lijstmetvragen__subtitle">Heir bevind jouw overzicht op aantal gemaakte vragen</p>
                <br /> 
                <form className="lijstmetvragen__form" method="get" action=""> 
                  <section className="lijstmetvragen__container flex jc-sb fw-w">
                    <div dangerouslySetInnerHTML={{__html: items}} />
                  </section>
                  <br />  
                  <section className="lijstmetvragen__btns">
                    <div  className="lijstmetvragen__btns__ruimte">
                    <button onClick={this.startonderzoek} className="btn u-float-left">Start</button>
                    <button onClick={this.save} className="btn u-float-right">Finish</button>
                    </div>
                  </section>
                </form>
            </article>      
        )
        
    }
}

export default Lijstmetvragen;