#! /usr/bin/env node
const printWeatherData = async () => {
	const url = 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en';
	const response = await fetch(url);
	const responsejson = await response.json();
	console.log('Current temperature in various places of Hong Kong, provided by the Hong Kong Observatory:')
	for (temperature of responsejson.temperature.data)
	console.log (`${temperature.value}${temperature.unit} in ${temperature.place}`);
}
printWeatherData();