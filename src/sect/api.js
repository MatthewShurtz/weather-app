import { kToC, kToF } from "./convert";

//the api key is free
async function getWeather (city, scale, el) {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cfb21599f58601e283f09e7e87e18051`, {mode:"cors"})
    const weatherData = await response.json();
    let currentWeather = weatherData.main.temp;

    if (scale === 'f') {
        el.textContent = Math.round(kToF(currentWeather));
    } else if (scale === 'c') {
        el.textContent = Math.round(kToC(currentWeather));
    }
}

async function getGiphy (el, temp) {
    
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=v98HQGqgpRpvBS4W2ZZy3MuZtZOPtHL1&s=${temp}`)
    const weatherGif = await response.json();
    // return weatherGif
    // console.log(weatherGif);
    el.src = weatherGif.data.images.original.url
}

export { getWeather, getGiphy };