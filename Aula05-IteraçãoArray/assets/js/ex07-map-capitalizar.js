console.clear();
console.log("Ex 7 — map: Capitalizar");

const palavras = ["javascript", "python", "java", "ruby"];
const capitalizadas = palavras.map(p => p.charAt(0).toUpperCase() + p.slice(1));
console.log(capitalizadas); // ["Javascript", "Python", "Java", "Ruby"]
