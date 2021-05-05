import './css/App.css';
import './css/weather-icons.min.css';

import React, { useState } from 'react';

import { List } from './components/List'
import { LineChart } from './components/LineChart'
import { Menu } from './components/Menu'
import { Update } from './components/Update'
import initialForecastData from './forcastData'

const optionsArray = ["TEMPERATURE", "PRESSURE", "HUMIDITY"];

let App = () => {

  const [forecast, setForecast] = useState(initialForecastData)
  const days = Object.keys(forecast)
  const [selectedOption, setSelectedOption] = useState(optionsArray[0])
  const [selectedDay, setSelectedDay] = useState(days[0]);

  return (
    <div className="container">
      <div id="menuHeader">
        CHOOSE DATA TO DISPLAY:
      </div>
      <header>
        5 DAY WEATHER FORECAST
      </header>
      <Menu options={optionsArray} selectedOption={selectedOption} onOptionSelect={setSelectedOption} />
      <LineChart forecast={forecast} selectedDay={selectedDay} selectedOption={selectedOption} />
      <List forecast={forecast} days={days} selectedDay={selectedDay} onDaySelect={setSelectedDay} />
      <Update setForecast={setForecast} />
      <footer>
        FOOTER PLACEHOLDER
      </footer>
    </div>
  );
}

export default App;

// Do ściągania prognozy API KEY: c2bde5f8da8fdba0fb48918b14c88352
