//Let's start off by converting Kelvin to Celsius
//This value will be constant so save it as such

const kelvin = 293;

//Celsius is similar to Kevlin, the only difference is that Celsius is always 273 degrees less than Kelvin
//Below is the conversion of Kelvin to Celsius

const celsius = kelvin - 273;

//Now we can use Celsius combined with a simple formula to convert our given temperature into Fahrenheit

const fahrenheit = celsius * (9/5) + 32;

