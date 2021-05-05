import { Line } from 'react-chartjs-2';
import React from 'react';

export let LineChart = (props) => {
  const dataName = ['temp', 'pressure', 'humidity']
  const dataArray = props.forecast[props.dayDates[props.dayOn]].map(el => el.main[dataName[props.category]]);  
  const chart = {                                                                         
    data: {
      labels: props.forecast[props.dayDates[props.dayOn]].map(el => el.dt_txt.slice(11, 16)),
      datasets: [{
        label: `${[props.dayDates[props.dayOn]]} ${props.optionsArray[props.category]}`,
        data: dataArray,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: "rgb(75, 192, 192)"
      }]
    },
    options: {
      plugins:{
        legend:{
          labels: {
            color: "black"
          }
        }
      }
    }
  }
  return(
    <div id="lineChart">
      <Line 
        data={chart.data} 
        options={chart.options} 
      />
    </div>
  )
}