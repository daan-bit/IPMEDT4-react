import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const CirkelGrafiek = (props) => {
    return (
        <section className="statistieken__CirkelGrafiek">
            <h2 className="statistieken__CirkelGrafiek__title">Dit is een cirkel grafiek</h2>
            <Doughnut className="statistieken__CirkelGrafiek__canvas" data={{
                labels: ['Zeer oneens', 'Oneens', 'Eens', 'Zeer eens'],
                datasets: [
                    {
                        label: '# die deze vraag hebben ingevuld',
                        data: [props.zeer_oneens, props.oneens, props.eens, props.zeer_eens], // we laden de data in via api die doorgegeven worden als props.
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
        </section>
    )
}

export default CirkelGrafiek