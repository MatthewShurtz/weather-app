import "./style.css";
import { getWeather, getGiphy } from "./sect/api.js";
import "./sect/gif";
import "./sect/convert"
import { kToF } from "./sect/convert";
import "./sect/gif";

const p = document.querySelector('p');
const img = document.querySelector('img');

const weather = getWeather('Houston');
weather.then((weatherData) => p.textContent = (kToF(weatherData.main.temp)));


getGiphy(img, 'cold');