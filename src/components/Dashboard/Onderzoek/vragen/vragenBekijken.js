import React, { Component, Fragment } from "react";
import axios from "axios";
import "./vragenBekijken.css";
import OnderzoekInfoComponent from "./OnderzoekInfoComponent";
import VraagComponent from "./vraag--show/VraagComponent";
import {Link} from 'react-router-dom';
class vragenBekijken extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onderzoek_id: this.props.match.params.id,
      errors: {},
      vragen: [],
    }; //loading zetten we op true eerst
  }

  apiCall = () => {
    const DEFAULT_URL = "http://madebydaniek-testwebsite3.nl/api/";
    const ONDERZOEK_URL = "onderzoek/" + this.state.onderzoek_id + "/vragen";
    axios
      .get(DEFAULT_URL + ONDERZOEK_URL)
      .then((res) => {
        this.setState({
          vragen: res.data,
        });
      })
      .catch((e) => this.setState({ errors: e.response.data }));
  };

  componentDidMount() {
    this.apiCall();
  }

  render() {
    const vragen = this.state.vragen;
    const vragenGevuld =
      vragen.length > 0 ? (
        vragen.map((vraag, index) => {
          return (
            <VraagComponent
              key={vraag.id}
              index={index}
              id={this.props.match.params.id}
              vraag={vraag.vraag}
              cat_naam={vraag.cat_naam}
              type_vraag={vraag.type_vraag}
              link={vraag.id}
            />
          );
        })
      ) : (
        <Fragment>
          <h2 className="onderzoek-vraag__error">
            Geen vragen toegevoegd voor dit onderzoek. Wil u vraag/vragen toevoegen?
          </h2>
          <Link to={`/admin/onderzoek/${this.props.match.params.id}/vragen/aanmaken`}>Vraag toevoegen</Link>
        </Fragment>
      );
    //functionele component onderzoekinfocomponent, dit is nodig om info te verkrijgen over onderzoek door meegegeven id via url
    return (
      <article className="vragen-bekijken">
        <section className="vragen-bekijken__container">
          <OnderzoekInfoComponent
            cssClass="vragen-bekijken__container__title"
            naam="Vragen"
            id={this.props.match.params.id}
            link={this.props.match.params.id}
          />
        </section>
        <section className="onderzoek-vragen">{vragenGevuld}</section>
      </article>
    );
  }
}

export default vragenBekijken;
