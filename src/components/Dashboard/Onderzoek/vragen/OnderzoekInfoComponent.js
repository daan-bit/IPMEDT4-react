import axios from 'axios';
import React, {useEffect, useState} from 'react';

//functionele component, aangemaakt door Alex

const OnderzoekInfoComponent = props => {
    const [onderzoek, setOnderzoek] = useState([])
    useEffect(() => {
            axios.get(`http://localhost:8000/api/onderzoek/${props.id}`)
                .then(res => {
                    setOnderzoek(res.data)
                })
                .catch(e => {
                    console.log(e)
                });

    }, []); // [] OP HET EINDE IS BELANGRIJK, ZODAT HIJ ALLEEN 1 KEER RUNT. ANDERS ONEINDIG
    return (
        <h2 className={props.cssClass}>{props.naam} {props.type} bij het onderzoek: {onderzoek.naam}</h2>
    )
}
export default OnderzoekInfoComponent