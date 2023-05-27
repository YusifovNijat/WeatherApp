
import './App.css';

import { useState} from 'react';
import axios from 'axios';

import openSky from '../../images/opensky.jpg';
import sunRise from '../../images/sunrise.jpg';
import sunSet from '../../images/sunset.jpg';
import night from '../../images/night.jpg';

import SearchBar from '../search-bar/search-bar';
import MainInfo from '../main-info/main-info';
import FeaturesContainer from '../features-container/features-container';


console.log(process.env);

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_MY_KEY}`;


  const searchLocation = async (event) => {
    if(event.key === "Enter"){
      await axios.get(url)
      .then((response) => {
      setData(response.data)
      })
      setLocation('')
    }
  }

  const checkPicture = () => {
    let sunriseNumber = +checkSunrise().substring(0,2);
    let sunsetNumber = +checkSunset().substring(0,2);
    let timeNumber = +clockSet().substring(0,2)
    if(sunriseNumber === timeNumber){
      return sunRise;
    } 
    else if(sunsetNumber === timeNumber){
      return sunSet;
    } 
    else if((timeNumber > (sunriseNumber + 1)) && (timeNumber < (sunsetNumber - 1))) {
      return openSky;
    }
    else {
      return night;
    }
  }

  const checkSunrise = () => {
    let unixSunrise = data.sys.sunrise;

    let sunrise = new Date(unixSunrise* 1000);

    let utcTime = sunrise.getTime() + (sunrise.getTimezoneOffset() * 60000)

    let timeOffset = data.timezone / 3600;

    let countryTime = new Date(utcTime + (3600000 * timeOffset));
    let hours = countryTime.getHours();
    let minutes = countryTime.getMinutes();
    
    if(hours < 10){
      hours = '0' + hours;
    }
    if(minutes < 10){
      minutes = '0' + minutes;
    }
    return `${hours} : ${minutes}`
  }

  const checkSunset = () => {
    let unixSunset = data.sys.sunset;
    let sunset = new Date(unixSunset* 1000);

    let utcTime = sunset.getTime() + (sunset.getTimezoneOffset() * 60000)

    let timeOffset = data.timezone / 3600;

    let countryTime = new Date(utcTime + (3600000 * timeOffset));
    let hours = countryTime.getHours();
    let minutes = countryTime.getMinutes();
    
    if(hours < 10){
      hours = '0' + hours;
    }
    if(minutes < 10){
      minutes = '0' + minutes;
    }
    return `${hours} : ${minutes}`
  }

  const clockSet = () => {

    let date = new Date();

    let utcTime = date.getTime() + (date.getTimezoneOffset() * 60000)

    let timeOffset = data.timezone / 3600;

    let countryTime = new Date(utcTime + (3600000 * timeOffset));

    let hours = countryTime.getHours();
    let minutes = countryTime.getMinutes();
    
    if(hours < 10){
      hours = '0' + hours;
    }
    if(minutes < 10){
      minutes = '0' + minutes;
    }
    return `${hours} : ${minutes}`
  }

  return (
    <div className="App">
      {data.sys? <img src={checkPicture()} alt={openSky} className='background-picture'/> : null}

      <SearchBar location={location} setLocation={setLocation} searchLocation={searchLocation}/>
      <MainInfo data={data}/>
      <FeaturesContainer data={data} checkSunrise={checkSunrise} checkSunset={checkSunset} clockSet={clockSet}/>
    </div>
  );
}

export default App;
