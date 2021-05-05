import React from 'react';
import moment from 'moment';

export let Update = props => {
  let separateDays = (obj) => {
    const groupedByDay = {}  

    obj.list.forEach((el) => {
      const date = moment(el.dt*1000).format('YYYY-MM-DD')
      if (!groupedByDay[date]) {
        groupedByDay[date] = []
      }
      groupedByDay[date].push(el)
    })
    return groupedByDay;
  }


  const onClick = () => {
    let city = document.getElementById('city').value;

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=c2bde5f8da8fdba0fb48918b14c88352`)
      .then(res => {
        if(!res.ok){
          throw new Error('OpenWeatherAPI response failed')
        }
        return res.json()
      })
      .then(data => props.setForecast(separateDays(data)))
      .catch(error => {
        alert(error)
      })

    console.log(props.forecast)
  }

  return(
    <div id="update">
      <form>
        <label htmlFor="city">INSERT CITY NAME</label><br></br>
        <input type="text" id="city" name="city"></input>
      </form>
      <button id="updateButton" onClick={onClick}>
        UPDATE
      </button>
    </div>
  )
}