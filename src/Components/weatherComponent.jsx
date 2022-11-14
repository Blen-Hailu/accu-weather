

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <div>
      <ul>
        <li>{value}</li>
        <li>{name}</li>
      </ul>
    </div>
  );
};

const dateBuilder = () => {
  let date = String(new window.Date());
  date = date.slice(0, 15);
  return `${date}`;
};
const WeatherComponent =(props) => {
  const {weather} = props;

const  isDay = weather?.weather[0].icon?.includes('d');
const getTime = (timeStamp) => {
  return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
    timeStamp * 1000
  ).getMinutes()}`;
};
return (
  <>
    
    <div className='forcast-box'>
        <button
          className='resetbtn'
          onClick={() => window.location.reload(false)}
        >
          <i class='fas fa-redo fa-2x'></i>{' '}
        </button>
        < div className='card'>
            <h2>{Math.round(weather.main.temp)} C°</h2>
            <h2>
              {' '}
              <span>{`${Math.floor(weather?.main?.temp)}°C`}</span>
              {`  |  ${weather?.weather[0].description}`}
            </h2>
          
          <p>{`${weather.name}, ${weather.sys.country}`}</p>
          <br />
        <div className='date'> {dateBuilder(new Date())}</div>
        </div>
        <div className='container'>
          <WeatherInfoComponent name='sunrise' value='' />
          <WeatherInfoComponent
            name={isDay}
            value={`${getTime(weather.sys[isDay])}`}
          />
          <WeatherInfoComponent
            name={'humidity'}
            value={weather.main.humidity}
          />
          <WeatherInfoComponent name={'wind'} value={weather.wind.speed} />
          <WeatherInfoComponent name={'wind'} value={weather?.wind?.speed} />
          <WeatherInfoComponent
            name={'pressure'}
            value={weather?.main?.pressure}
            />
            </div>
          </div>
          ;
  </>
      );
};
    export default WeatherComponent;