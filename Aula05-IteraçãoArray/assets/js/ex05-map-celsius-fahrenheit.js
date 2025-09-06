console.clear();
console.log("Ex 5 — map: Celsius → Fahrenheit");

const celsius = [0, 20, 30, 40];
const fahrenheit = celsius.map(c => (c * 9/5) + 32);
console.log(fahrenheit); // [32, 68, 86, 104]
