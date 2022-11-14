import React from 'react';
import CityComponent from './Components/CityComponent';
import WeatherComponent from './Components/WeatherComponent';
import axios from 'axios';
import { useState } from 'react';
import './App.css';


const api = {
  key: "TA8uLPoxF8izLtUopNm4Wy42RrGsMA9",
  base: "http://dataservice.accuweather.com/locations/v1/cities/search",

};
const crossDomain = "https://whispering-river-64643.herokuapp.com/";
const requestUrl = `${crossDomain}/${api.base}`;

function App() {

  /*fetch ('http://localhost:8000/api')
  .then(res => res.json())
  .then(res=> console.log(res));
  */
  
  const [city, updateCity] = useState('');
  const [weather, updateWeather] = useState('');
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const fetchWeather = async (e) => {
    e.preventDefault();
    await axios
      .get(`${requestUrl}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then((response) => {
        updateWeather(response.data);
        setQuery('');
        console.log(response);
      })

      .catch((error) => {
        console.log(error);
        updateWeather('');
        setQuery('');
        setError({ message: 'Not Found', query: query });
      });
  };
  return (
    <div className='App'>
      <h1>Kylma Forecast</h1>
      {weather ? 
        (<WeatherComponent weather={weather} />
      ) :
      
      (
        <>
          <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
          <li id='error'>
            {error.query} {error.message}
          </li>
        </>
      )}
    </div>
  );
}
export default App;