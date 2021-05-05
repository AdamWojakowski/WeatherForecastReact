import React from 'react';
import { range } from '../utils'

export let List = props => {
  let chooseIcon = (dayDate, object, icons) => {
    return icons[object[`${dayDate}`][0].weather[0].main];
  };
  return(
    <div id="list">
      <div id="listNames">
        {range(1, props.dayDates.length).map( dayNumber =>
          <span key={dayNumber} className="dayDates">{props.dayDates[dayNumber - 1].toUpperCase()}</span>
        )}
      </div>
      <div id="listImages">
        {range(1, props.dayDates.length).map( dayNumber => {

          const classes = [`dayImage ${chooseIcon(props.dayDates[dayNumber - 1], props.forecast, props.icons)}`]

          if(props.dayOn === dayNumber - 1){
            classes.push('selected')
          }

          return(
            <button key={dayNumber} onClick={() => props.setDayOn(dayNumber - 1)} className={classes.join(' ')}></button>
          )}
        )}
      </div>
    </div>
  )
} 