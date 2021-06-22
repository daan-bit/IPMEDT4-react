import React from 'react'
import { Bar } from 'react-chartjs-2'

import './BarGrafiek.css';

const BarGrafiek = (props) => {
    return (
        <section className="bargrafiek">
            <div className="bargrafiek__content">
                <Bar className="bargrafiek__canvas" data={{
                    labels: ['Oneens', 'Beetje oneens', 'Weet ik niet', 'Beetje eens', 'Eens'],
                    datasets: [
                        {
                            label: '# die deze vraag hebben ingevuld',
                            data: [props.zeer_oneens, props.oneens, props.geen_mening, props.eens, props.zeer_eens], // we laden de data in via api die doorgegeven worden als props.
                            backgroundColor: ['#B5461F', '#EB8C4B', '#3D4782', '#1F34B5', '#10A1E9'],
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

export default BarGrafiek