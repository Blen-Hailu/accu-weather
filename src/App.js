import React, {useState } from 'react';
import axios from 'axios';
import './App.css';
import { WeatherViewer } from './Components/weatherdisplay';


function App() {
   
   
  //get city information

  const apiKey="1cnmbGBBHBtf9xAS0QaF0L5ImUpN9Uic";
   const urlCity="http://dataservice.accuweather.com/locations/v1/cities/search";
     //states
 const [city, setCity] = useState('');
 const [cityData, setCityData] = useState(null);
//city Search from Submit

 const getCity = (e) => {
  e.preventDefault();
  axios.get(`${urlCity}?apikey=${apiKey}&q=${city}`)
  .then((response)=>{
    console.log(response.data);
    setCityData(response.data[0]);
    setCity('');

  }).catch(err=>console.log(err.messge))
};
 

return (
  <>
    <div className='wrapper'>
      <h1 className='headliner'> Accu Weather App</h1>

        <form onSubmit={getCity}>
          <label></label>
          <div className='search-box'>
          <input className='form-control' required placeholder='Search for a city to get weather data'
          value={city} onChange={(e)=>setCity(e.target.value)}/>
          <button type='submit' className="btn"> SEARCH
          </button>
        </div>
      </form>
      {cityData&& <div style={{padding:10+'px', width: 100+'%'}}><WeatherViewer cityData={cityData}/></div>}
    </div>
        

    </>
  );
}
export default App;