import './main-info.css';

import clearSky from '../../images/clearSky.png';
import mist from '../../images/mist.png';
import brokenClouds from '../../images/brokenClouds.png';
import fewClouds from '../../images/fewClouds.png';
import lightRain from '../../images/lightRain.png';
import snow from '../../images/snow.png';
import haze from '../../images/haze.png';

const MainInfo = ({data}) => {

    const checkDescription = () => {
        let description = data.weather[0].description;
        if(description === 'clear sky'){
          return clearSky;
        }
        else if(description === 'mist'){
          return mist;
        }
        else if(description === 'broken clouds'){
          return brokenClouds;
        }
        else if(description === 'few clouds' || description === 'overcast clouds' || description === 'scattered clouds'){
          return fewClouds;
        }
        else if(description === 'light rain' || description === 'drizzle' || description === 'rain'){
          return lightRain;
        }
        else if(description === 'snow'){
          return snow;
        }
        else if (description === 'haze'){
          return haze;
        }
      }

    return(
        <div className="location">
          {data.main? <p>{Math.floor(data.main.temp)}°</p> : null}
          <h1>{data.name}</h1> 
          {data.weather ? <p>{data.weather[0].description}</p> : null}
          <div className="span-container">
            {data.main? <span>H: {Math.floor(data.main.temp_max)}°</span> : null}
            {data.main? <span>L: {Math.floor(data.main.temp_min)}°</span> : null}
          </div>
          <i className="fa-sharp fa-solid fa-sun-bright fa-flip" style={{color: '#fff70a'}}></i>
          {data.main? <img src={checkDescription()} alt='Something is wrong' className='description-picture'/>: null}
        </div>
    )
}

export default MainInfo;