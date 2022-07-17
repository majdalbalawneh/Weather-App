import React, { useState } from 'react'
import axios from 'axios'

function Weather() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const[date , setDate] = useState({})

  const url = ` https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/2022-07-17/2022-07-22?unitGroup=metric&key=8C6PAS2GFMCK62ZTXCMH5MB74&contentType=json`
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
        console.log(response.data.days,'days');
      })
      
      setLocation('')
    }
  }

  return (
    
    <div className="app">
      <div className="search">
        
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }



      </div>
    </div>
    
  );
}

export default Weather;
