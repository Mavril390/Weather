import React from 'react';
import ReactDOM from 'react-dom';
import InfoWeatherToday from './Components/WeatherToday/InfoWeatherToday'
import InfoWeatherPrevius from './Components/WeatherPrevious/infoWeatherPrevious'
import './index.css';

ReactDOM.render(
  <div className="content container">
    <div className="row" style={{width: "100%"}}>
      <InfoWeatherToday />
      <InfoWeatherPrevius />
    </div>
  </div>,
  document.getElementById('root')
);

