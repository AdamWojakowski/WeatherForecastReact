import React from 'react';

const icons = {
  Sun: "wi wi-day-sunny",
  Rain: "wi wi-day-rain",
  Snowfall: "wi wi-day-snow",
  Clouds: "wi wi-day-cloudy",
  Clear: "wi wi-day-sunny"
}

export let List = props => {
  let chooseIcon = (day, forecast, icons) => {
    return icons[forecast[`${day}`][0].weather[0].main];
  };

  return(
    <div id="list">
      <div id="listNames">
        {props.days.map(day =>
          <span key={day} className="dayDates">{day.toUpperCase()}</span>
        )}
      </div>
      <div id="listImages">
        {props.days.map(day => {

          const classes = [`dayImage ${chooseIcon(day, props.forecast, icons)}`]

          if(props.selectedDay === day){
            classes.push('selected')
          }

          return(
            <button key={day} onClick={() => props.onDaySelect(day)} className={classes.join(' ')} />
          )}
        )}
      </div>
    </div>
  )
}
