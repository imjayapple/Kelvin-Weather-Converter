//Let's start off by converting Kelvin to Celsius
//This value will be constant so save it as such

const kelvin = 293;

//Celsius is similar to Kevlin, the only difference is that Celsius is always 273 degrees less than Kelvin
//Below is the conversion of Kelvin to Celsius

const celsius = kelvin - 273;

//Now we can use Celsius combined with a simple formula to convert our given temperature into Fahrenheit

let fahrenheit = celsius * (9/5) + 32;


//Conversion from Celsius to Fahrenheit often yield a decimal number
//Use the built-in method ".floor()" within JavaScript to round the Fahrenheit temperature down.

fahrenheit = Math.floor(fahrenheit);

//Using "console.log()" and string interpolation log the temperature in Fahrenheit to the console

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);