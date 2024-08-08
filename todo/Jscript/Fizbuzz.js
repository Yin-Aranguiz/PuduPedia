function fbuzz (n){
    if (n % 3 == 0 && n % 5 == 0){
        return 'fizzBuzz';
    } else if (n % 5 == 0) {
        return 'buzz';
    } else if (n % 3 == 0) {
        return 'fizz';
    } else {
        return n 
    }
}


console.log(fbuzz(55));

console.log(fbuzz(33));

console.log(fbuzz(78));

console.log(fbuzz(55));

console.log(fbuzz(10));

console.log(fbuzz(1));

console.log(fbuzz(33));



///////////////////////////////////////////////


function fbuzz (n) {
    if (n % 3 == 0 && n % 5 == 0){
        return 'fizzBuzz';
    } else if (n % 5 == 0) {
        return 'buzz';
    } else if (n % 3 == 0) {
        return 'fizz';
    } else {
        return n 
    }
}


console.log(fbuzz(55));


const sum = function(a, b){ //definimos la funcion asignandole el nombre 'sum'
    return a + b;           //le pedimos que realicen la siguiente acción a+b
}

console.log(sum(1,2)); //print
console.log(sum(3,5));
console.log(sum(18,22));


let cadena = 'hola' // Cadena Original: "hola"
let arrayDeCadena = cadena.split(''); //Array de Caracteres: ['h', 'o', 'l', 'a']
let arrayInvertido = arrayDeCadena.reverse(); // Array Invertido: ['a', 'l', 'o', 'h']
let cadenaInvertida = arrayInvertido.join (''); //Cadena Invertida: "aloh"