// Array original de números
let numeros = [1, 2, 3, 4, 5];

// Usando .map() para crear un nuevo array con cada número multiplicado por 2
let dobles = numeros.map(function(numero) {
    return numero * 2; // Multiplica cada número por 2
});

console.log(dobles); // [2, 4, 6, 8, 10]
///////////////////////////////////////

console.log(menority)

let array = [1, 2, 3, 4];
let filteredArray = array.filter(element => element > 2);
console.log(filteredArray); // [3, 4]

// Seleccionar un elemento aleatorio del array 'object'
let randomElement1 = object[Math.floor(Math.random() * object.length)];
// Math.random() genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo).
// Al multiplicar Math.random() por object.length, estamos generando un número decimal
// entre 0 y la longitud del array 'object' (no inclusive). Si object.length es 3, el rango es [0, 3).
// Math.floor() redondea hacia abajo el número decimal, obteniendo un índice entero entre 0 y (object.length - 1).

// Seleccionar un elemento aleatorio del array 'excuse'
let randomElement2 = excuse[Math.floor(Math.random() * excuse.length)];
// Misma lógica que el comentario anterior, pero aplicada al array 'excuse'.

// Seleccionar un elemento aleatorio del array 'task'
let randomElement3 = task[Math.floor(Math.random() * task.length)];
// Misma lógica que el comentario anterior, pero aplicada al array 'task'.