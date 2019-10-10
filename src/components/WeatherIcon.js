import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudRain, faCloud, faSun, faWind, faSmog, faWater, faSnowflake, faCloudShowersHeavy} from '@fortawesome/free-solid-svg-icons'  

export default function WeatherIcon({weatherType}){
	console.log('weatherType', weatherType);

	switch(weatherType) {
		case 'Rain':
			return (
				<FontAwesomeIcon icon={faCloudShowersHeavy} className='WeatherIcon' size='5x'/>
			);
		case 'Drizzle':
			return (
				<FontAwesomeIcon icon={faCloudRain} className='WeatherIcon' size='5x'/>
			);
		case 'Clouds':
			return (
				<FontAwesomeIcon icon={faCloud} className='WeatherIcon' size='5x'/>
			);
		case 'Clear':
			return (
				<FontAwesomeIcon icon={faSun} className='WeatherIcon' size='5x'/>
			);
		case 'Windy':
			return (
				<FontAwesomeIcon icon={faWind} className='WeatherIcon' size='5x'/>
			);
		case 'Mist':
			return (
				<FontAwesomeIcon icon={faWater} className='WeatherIcon' size='5x'/>
			);
		case 'Snow':
			return (
				<FontAwesomeIcon icon={faSnowflake} className='WeatherIcon' size='5x'/>
			);
		default:
			return <div>{weatherType}</div>
	}
}