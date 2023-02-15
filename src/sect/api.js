
//the api key is free
async function getWeather (city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cfb21599f58601e283f09e7e87e18051`, {mode:"cors"})

    const weatherData = await response.json();
    return weatherData;
}

export default getWeather