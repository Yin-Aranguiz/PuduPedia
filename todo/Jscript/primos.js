function primo (m){  //1. define función y asigna una var
    let div = 0;     //2. Define un var que aumente el n de divisores
// ESTRUCTURA FOR for (inicialización; condición; incremento) 

   for (let j = 3;  j <= 384; j++) { // el j++ es un incremento de 1 en este caso
        if (m % j == 0) {
            div += 1 ; // +=1 significa que aumentara un divisor si se cumple la condicion 
        }
   } 
   if (div <= 2 ) { //si tiene menos o igual a 2 divisores es primo
        return[true, 'es primo']; // nos entrega el valor
   } else {                         // si es mayor a 2 divisores, no es primo
        return [false, 'no es primo']; // imprime que no son primo
   }

}

console.log(primo(3)); // para imprimir y llamar a la fx debemos linkear adentro el nombre de la funcion y el valor que le daremos a 'm' en este caso
console.log(primo(6));
console.log(primo(8));
console.log(primo(257));
console.log(primo(333));