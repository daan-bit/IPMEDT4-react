import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const CirkelGrafiek = (props) => {
    return (
        <div>
            <h1>Test</h1>
            <Doughnut data={{
                labels: ['Zeer oneens', 'Oneens', 'Eens', 'Zeer eens'],
                datasets: [
                    {
                        label: '# of votes',
                        data: [props.zeer_oneens, props.oneens, props.eens, props.zeer_eens],
                        backgroundColor: ['blue'],
                    }
                ],
                borderColor: 'green',
                borderWidth: 10
            }}
            height={10}
            width={10}
            options={{
                maintainAspectRatio:true,
            }} 
            />
        </div>
    )
}

export default CirkelGrafiek