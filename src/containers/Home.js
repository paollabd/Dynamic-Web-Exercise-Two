import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Home.css"
import WeatherIcon from "../components/WeatherIcon.js"
import PageWrapper from "./PageWrapper.js"

const apiKey = '1a3d76623f9ad51e2c3ae7f2409329a9';

export default function Home(props) {
	const [error, isError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const [success, isSuccess] = useState(false);

	const [city, setCity] = useState('');
	const [weather, setWeather] = useState({});

	// function apiCallback(response) {
	// 	console.log('response', response);
	// 	if (response.status != 200) {
	// 		isError(true);
	// 		setErrorMessage(`${response.status}: ${'Error'}`);
	// 	} else {
	// 		isSuccess(true);
	// 	}
	// }
	
	function queryWeatherAPI(queryCity) {
		axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&APPID=${apiKey}`)
		.then(function(response) {
			console.log('response', response);
			if (response.status != 200) {
				isError(true);
				setErrorMessage(`${response.status}: ${'Error'}`);
			} else {
				isSuccess(true);
			}
			setWeather(response);
			return response;
		})
		.catch(function(error) {
			console.log('error', error);
			return error;		
		});
	}

	// function queryWeatherAPI(queryCity) {
	// 	axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&APPID=${apiKey}`)
	// 	.then(apiCallback(response))
	// 	.catch(function(error) {
	// 		console.log('error', error);
	// 		return error;		
	// 	});
	// }
	
	useEffect(() => {
		//setCity('London');
		//queryWeatherAPI('London');
		//console.log('weather test', queryWeatherAPI('London'));
		const urlParams = new URLSearchParams(props.location.search)
		const cityParam = urlParams.get('city') ? urlParams.get('city') : 'London';
		setCity(cityParam);
		console.log('weather test', queryWeatherAPI(cityParam));
	}, []);
	
	console.log('weather', weather);

	// useEffect(() => {
	// 	let getWeatherType = weather.data ? weather.data.weather[0].main : '';
	// 	let getCloudy = weather.data ? weather.data.clouds.all : 0;
	// 	setWeatherType(getWeatherType)
	// 	setCloudy(getCloudy)
	// }, [weather]); // every time weather changes it runs this useEffect
	
	return (
		<PageWrapper className="WeatherInfo" cloudy={weather.data && weather.data.clouds.all}>
			<div className="WeatherNav">
				<a className={`WeatherNav__Item ${city === 'Amsterdam' ? 'WeatherNav__Item--active' : ''}`} href="/?city=Amsterdam">Amsterdam</a>
				<a className={`WeatherNav__Item ${city === 'Brussels' ? 'WeatherNav__Item--active' : ''}`} href="/?city=Brussels">Brussels</a>
				<a className={`WeatherNav__Item ${city === 'London' ? 'WeatherNav__Item--active' : ''}`} href="/?city=London">London</a>
				<a className={`WeatherNav__Item ${city === 'Paris' ? 'WeatherNav__Item--active' : ''}`} href="/?city=Paris">Paris</a>
				<a className={`WeatherNav__Item ${city === 'Rome' ? 'WeatherNav__Item--active' : ''}`} href="/?city=Rome">Rome</a>
				<a className={`WeatherNav__Item ${city === 'Rio de Janeiro' ? 'WeatherNav__Item--active' : ''}`} href="/?city=Rio de Janeiro">Rio de Janeiro</a>
			</div>

			<div className="WeatherDescription">
				<h1 className="CityTitle">Weather in {city}</h1>
				<WeatherIcon className="WeatherIcon" weatherType={weather.data && weather.data.weather[0].main} />
				<p>{weather.data && weather.data.weather[0].description}</p>
				<div className="InfoCard">
					<p>Current Temperature: {weather.data && weather.data.main.temp} Kelvin</p>
					<p>Today's High Temperature: {weather.data && weather.data.main.temp_max} Kelvin</p>
					<p>Today's Low Temperature: {weather.data && weather.data.main.temp_min} Kelvin</p>
					<p>Wind: {weather.data && weather.data.wind.speed} km/h coming at {weather.data && weather.data.wind.deg}</p>
					<p>Humidity: {weather.data && weather.data.main.humidity}</p>
					<p>Cloudy: {weather.data && weather.data.clouds.all}</p>
				</div>
				{error && <div className="errorMessage">{errorMessage}</div>}
				{success && <div className="successMessage">Weather query successful!</div>}
			</div>
		</PageWrapper>
	);
}

// <p>Humidity: {weather.main ? weather.main.humidity : ''}</p>
// <p>Humidity: {weather.main && weather.main.humidity}</p>