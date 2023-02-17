import "./style.css";
import { getWeather, getGiphy } from "./sect/api.js";

const img = document.querySelector('img');
const para = document.querySelector('p');

getWeather(para, 'Houston');
getGiphy(img)
