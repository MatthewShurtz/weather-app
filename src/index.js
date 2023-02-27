import "./style.css";
import { getWeather, getGiphy } from "./sect/api.js";
import "./sect/gif";
import "./sect/convert";
import { kToF } from "./sect/convert";
import "./sect/gif";
import gifTemp from "./sect/gif";

const btn = document.querySelector('button');
const tempNum = document.querySelector(".tempNum");
const img = document.querySelector('img');


btn.addEventListener('click', function() {

    const input = document.querySelector('input').value;
    const weather = getWeather(input);
    weather.then((weatherData) => tempNum.textContent = (kToF(weatherData.main.temp)));

    const weatherTemp = weather.then((weatherData) => getGiphy(gifTemp(weatherData.main.temp)));

    weatherTemp.then((gif) => img.src = gif.data.images.original.url)
})