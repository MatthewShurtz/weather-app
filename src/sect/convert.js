function kToF(kelvin) {
let fahrenheit = 1.8 * (kelvin - 273) + 32;
return Math.round(fahrenheit)
}

function kToC(kelvin) {
let celsius = kelvin - 273.15;
return Math.round(celsius)
}

export {kToF, kToC }