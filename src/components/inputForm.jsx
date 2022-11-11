import {useState} from 'react';

function InputForm(){ 

  const [city, setCity] =useState('')
  const handleCityChange = event => {
    setCity(event.target.value)
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert('Thank you!');

  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter Your City Here"
              onChange={handleCityChange}
              value={city}
            />
              
          </div>
          <button type="submit" className = "main-button">
            Submit
          </button>
        </form>
    </div>
  )
}
export default InputForm;
