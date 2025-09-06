console.clear();
console.log("Ex 3 — forEach: Modificar array existente");

const numeros = [1, 2, 3, 4, 5];
numeros.forEach((_, i, arr) => { arr[i] = arr[i] * 2; });
console.log(numeros); // [2, 4, 6, 8, 10]
