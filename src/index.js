import "./style.css";
import getWeather from "./sect/api.js";

getWeather('Houston').then(function(result) {
    console.log(result);
}); 