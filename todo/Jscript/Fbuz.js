let n =1;

while (n <= 100) {

    if (n % 3 == 0 && n % 5== 0) {
        console.log('fizzbuzz');
    } else if (n % 5 == 0) {
        console.log('buzz');
    } else if (n % 3 == 0) {
        console.log('fizz');
    } else {
        console.log(n);
    }
    n+=1
}
//Funciones Recursivas
// 	Definición: Una función recursiva es una función que se 
// llama a sí misma hasta que se cumple una condición base.
// Función recursiva que calcula el factorial de un número
function factorial(n) {
    if (n === 0) {
        return 1; // Condición base: el factorial de 0 es 1
    } else {
        return n * factorial(n - 1); // Llamada recursiva
    }
}

// Llamada a la función 'factorial' con el argumento 5
console.log(factorial(5)); // 120



