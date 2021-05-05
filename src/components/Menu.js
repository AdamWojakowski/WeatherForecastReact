import React from 'react';
import { range } from '../utils'

export let Menu = props => {

  return(
    <div id="menu">
      {range(1, props.optionsArray.length).map( optionNumber => {

        const classes = ['option']

        if(props.category === optionNumber - 1) {
          classes.push('selected')
        }

        return(
          <button key={optionNumber} className={classes.join(' ')} onClick={() => props.setCategory(optionNumber - 1)}>
            {props.optionsArray[optionNumber-1]}
          </button>
        )}
      )}
    </div>
  )
}