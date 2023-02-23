import "./style.css";
import { getWeather, getGiphy } from "./sect/api.js";
import "./sect/gif";
import "./sect/convert";
import { kToF } from "./sect/convert";
import "./sect/gif";
import gifTemp from "./sect/gif";

const p = document.querySelector('p');
const img = document.querySelector('img');

const weather = getWeather('Houston');
// const testGif = getGiphy('hot');
const weatherGif = getGiphy(weather)
// const weatherGif = getGiphy(weather.then((weatherData) => console.log(gifTemp(weatherData.main.temp))));

weather.then((weatherData) => p.textContent = (kToF(weatherData.main.temp)));


weatherGif.then((gif) => img.src = gif.data.images.original.url);

// testGif.then((gif) => img.src = gif.data.images.original.url)