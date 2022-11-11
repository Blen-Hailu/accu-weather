//import { useState, useEffect } from 'react';
import './App.css';
import InputForm from './components/inputForm';

function App (){
  <InputForm/>
}
/*const Weather =() =>{
  const [search, setSearch]= usestate("");
  const[data, setData] = useState ([]);
  const[input,setInput] =useState("")
  let result = true;
  useEffect (()=>{
    const fetchWeather = async () => {
      const response =await fetch ();
      if (result){
        setData(await response.json());
      }
      return () => {
        result =false;
      }
  }
  )
}fetchWeather();
},[);
  return 
  <div>
      
  </div>

/*function App() {

const apiKey = "HCD7jnVkMj96094RX0lsttIYZvoQO848"
  const {weatherData, setWeatherData} = useState{}
  const {city, setCity} = useState{""}
   const getWeather = (event)=>{
    if(event.key =="Enter"){
      fetch().then ( 
        response =>response json{}  ).then (
          data=> {
            setWeatherData{data}
          }
        )    )
    }
   }
  return (
    <div className="cityContainer">
      <input>
      placeholder= "Enter city"
      onChange= {e=>setCity {e.target.value)}
      value ={city}
      onKeyPress ={getweather}
      </input>
    </div>
  
  );
}
*/
export default App;
