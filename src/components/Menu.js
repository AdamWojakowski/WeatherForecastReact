import React from 'react';

export let Menu = props => {

  return(
    <div id="menu">
      {props.options.map(option => {
        const classes = ['option']

        if (props.selectedOption === option) {
          classes.push('selected')
        }

        return (
          <button key={option} className={classes.join(' ')} onClick={() => props.onOptionSelect(option)}>
            {option}
          </button>
        )}
      )}
    </div>
  )
}
