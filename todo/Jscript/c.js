// Crea un array con los números del 1 al 5. 
// Luego, agrega el número 6 al final, elimina el primer elemento y muestra el array resultante.

let numbers = [1 , 2 , 3 , 4 , 5 ];
numbers.push(6); // push agrega el último elemento
console.log (numbers);

numbers.shift(); // elimina el primer elemento
console.log (numbers);

numbers.pop(); // elimina el último elemento siempre
console.log (numbers);

// EJERCICIO 2 //

//Dado un array de números, crea un nuevo array con el cuadrado de cada número. 
// Luego, filtra los números que son mayores a 10.

let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let cuadrado = n.map(function(nu) {
    return nu ** 2;  
});

console.log(cuadrado);

let filteredArray = cuadrado.filter (element => element < 10); //Creo un array con punta flecha que dice que elementos menores a 10 se filtran

console.log(filteredArray);

// EJERCICIO 3 //

//Dado un array de números, encuentra la suma de todos los elementos.//

let i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let sum = i.reduce ((x, y) => x + y, 20); // accumulator y currentValue son parametros como x e y

console.log(sum) 