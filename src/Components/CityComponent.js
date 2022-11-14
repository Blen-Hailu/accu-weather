import React from 'react';


const CityComponent = (props) => {
  const {updateCity, fetchWeather } = props;
  return (
    <>
      <div className='box'>
        <form onSubmit={fetchWeather}>
          <input
            className='input'
            aria-label='location'
            type='text'
            placeholder='Search for location'
            onChange={(e) => updateCity(e.target.value)}
            required
          />
          <button type='submit' className='button' onSubmit={fetchWeather}>
            SEARCH
          </button>
        </form>
      </div>
    </>
  );
};

export default CityComponent;