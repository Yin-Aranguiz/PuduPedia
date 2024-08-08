// crear funcion de suma
const sum = function(a, b){ //definimos la funcion asignandole el nombre 'sum'
    return a + b;           //le pedimos que realicen la siguiente acción a+b
}

console.log(sum(1,2)); //print
console.log(sum(3,5));
console.log(sum(18,22));


//crear saludo personalizado
function greet(name) {
    console.log ('Hola, '+ name);
} 

greet('cristian');
greet('michelle');
greet('marcela');
greet('xia');
//calcular el area de un rectangulo
const area = function(c, d){
    return c*d +'cm cuadrados';
}

console.log(area(2,4));
console.log(area(9,16));
console.log(area(1,3));

//calcular si un numero es par
function par (p) {
    if (p % 2 == 0) {
        return p + ' es par';
    } else{
        return p + ' es impar';
    }
}
 console.log(par(2));
 console.log(par(3));
 console.log(par(1111111));
 console.log(par(-20));

//encontrar el numero mayor
function  mayor (m,u){
    if (m < u) {
        return u + ' es mayor que '+ m;
    } else if (m > u){
        return m + ' es mayor que '+ u;
    } else {
        return 'no cumple con las condiciones'
    }
} 

console.log(mayor(4,3));
console.log(mayor(7,2));
console.log(mayor(5,5));

//invertir una cadena

function InvertirCadena (cadena) {
    let arrayDeCadena = cadena.split(''); //Array de Caracteres: ['h', 'o', 'l', 'a']
    let arrayInvertido = arrayDeCadena.reverse(); // Array Invertido: ['a', 'l', 'o', 'h']
    let cadenaInvertida = arrayInvertido.join (''); 
        return cadenaInvertida;
}

let probando = InvertirCadena('narutoUzumaki')
console.log(probando)