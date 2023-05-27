import Feature from "../feature/feature";

import './features-container.css';

import temperature from '../../images/temperature.png';
import pressure from '../../images/pressure.png';
import humidity from '../../images/humidity.png';
import visibility from '../../images/visibility.png';
import wind from '../../images/wind.png';
import time from '../../images/time.png';
import sunriseIcon from '../../images/sunriseIcon.png';
import sunsetIcon from '../../images/sunsetIcon.png';

const FeaturesContainer = ({data, checkSunrise, checkSunset, clockSet}) => {
    return(
        <div className="features-container">
            <Feature name = 'FEELS LIKE' data={data} checkSunrise={checkSunrise} checkSunset={checkSunset} clockSet={clockSet} pictures={temperature} info={data.main ? <h2>{Math.floor(data.main.feels_like)}°</h2> : null}/>
            <Feature name = 'PRESSURE' data={data} checkSunrise={checkSunrise} checkSunset={checkSunset} clockSet={clockSet} pictures={pressure} info={data.main ? <h2>= {data.main.pressure} hPa</h2> : null}/>
            <Feature name = 'HUMIDITY' data={data} checkSunrise={checkSunrise} checkSunset={checkSunset} clockSet={clockSet} pictures={humidity} info={data.main ? <h2>{data.main.humidity}%</h2> : null}/>
            <Feature name = 'VISIBILITY' data={data} checkSunrise={checkSunrise} checkSunset={checkSunset} clockSet={clockSet} pictures={visibility} info={data.visibility ? <h2>{data.visibility / 1000} km</h2> : null}/>
            <Feature name = 'WIND' data={data} checkSunrise={checkSunrise} checkSunset={checkSunset} clockSet={clockSet} pictures={wind} info={data.wind ? <h2>{Math.floor(data.wind.speed)} km/h</h2> : null}/>
            <Feature name = 'TIME' data={data} checkSunrise={checkSunrise} checkSunset={checkSunset} clockSet={clockSet} pictures={time} info={data.timezone? <h2>{clockSet()}</h2> : null}/>
            <Feature name = 'SUNRISE' data={data} checkSunrise={checkSunrise} checkSunset={checkSunset} clockSet={clockSet} pictures={sunriseIcon} info={data.sys ? <h2>{checkSunrise()}</h2> : null}/>
            <Feature name = 'SUNSET' data={data} checkSunrise={checkSunrise} checkSunset={checkSunset} clockSet={clockSet} pictures={sunsetIcon} info={data.sys ? <h2>{checkSunset()}</h2> : null}/>
        </div>
    )
}

export default FeaturesContainer;
