
//the api key is free
async function getWeather (el, city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cfb21599f58601e283f09e7e87e18051`, {mode:"cors"})

    const weatherData = await response.json();
    
    console.log(weatherData);

    el.textContent = weatherData.main.temp
}

async function getGiphy (el) {
    
    const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=v98HQGqgpRpvBS4W2ZZy3MuZtZOPtHL1')
    const weatherGif = await response.json();
    // return weatherGif
    // console.log(weatherGif);
    el.src = weatherGif.data.images.original.url
}

export { getWeather, getGiphy };