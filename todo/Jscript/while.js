// Contador del 1 al 10//

let contador= 0

while (contador <=10){
    console.log(contador)
    contador++; }       

// Contador del 1 al 10 sumando estos numeros //
let sum= 0; //Acá definí el valor inicial y el que sumamos
let number= 1; // defino en cuanto avanzará el rango

while (number<=10){ // mientras que number sea menor o igual 10
    console.log(number)//imprime el rango entre 1 y 10
    sum += number; //Le suma el incremento 0+1=1+2=3+3=6+4...
    number ++; // incrementar el valor de una variable en 1

console.log('La sumatoria entre 1 y 10 es: ' + sum)}