import "./style.css";
import { getWeather, getGiphy } from "./sect/api.js";
import "./sect/gif";
import gifTemp from "./sect/gif";

const img = document.querySelector('img');
const para = document.querySelector('p');

getWeather('houston', 'f', para);
getGiphy(img, 'cold');
gifTemp(299);