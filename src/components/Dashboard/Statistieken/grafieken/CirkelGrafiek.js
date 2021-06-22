import React from 'react'
import { Doughnut } from 'react-chartjs-2'

import './CirkelGrafiek.css';

const CirkelGrafiek = (props) => {
    return (
        <section className="cirkelgrafiek">
            <div className="cirkelgrafiek__content">
                <Doughnut className="cirkelgrafiek__canvas" data={{
                    labels: ['Zeer oneens', 'Oneens', 'Geen mening', 'Eens', 'Zeer eens'],
                    datasets: [
                        {
                            label: '# die deze vraag hebben ingevuld',
                            data: [props.zeer_oneens, props.oneens, props.geen_mening, props.eens, props.zeer_eens], // we laden de data in via api die doorgegeven worden als props.
                            backgroundColor: ['blue', 'red', 'green', 'yellow', 'black'],
                        }
                    ],
                    borderColor: 'white',
                    borderWidth: 10
                }}
                height={10}
                width={10}
                options={{
                    maintainAspectRatio:true,
                }} 
                />
            </div>
        </section>
    )
}

export default CirkelGrafiek