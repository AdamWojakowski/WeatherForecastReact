import { Line } from 'react-chartjs-2';
import React from 'react';

export let LineChart = (props) => {
  const forecastForSelectedDay = props.forecast[props.selectedDay];

  const dataArray = forecastForSelectedDay.map(el => el.main[translateOption(props.selectedOption)]);

  const chart = {
    data: {
      labels: forecastForSelectedDay.map(el => el.dt_txt.slice(11, 16)),
      datasets: [{
        label: `${[props.selectedDay]} ${props.selectedOption}`,
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

function translateOption(option) {
  switch (option) {
    case 'TEMPERATURE':
      return 'temp'
    case 'PRESSURE':
      return 'pressure'
    case 'HUMIDITY':
      return 'humidity'
    default:
      throw Error(`Invalid options '${option}' provided`)
  }
}
