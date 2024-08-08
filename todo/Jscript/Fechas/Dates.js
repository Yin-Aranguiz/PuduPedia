function entreDias (fecha1, fecha2) {
    let milisegundo1 = fecha1.getTime(); //aca lo pasamos a milisegundo para poder manejarlo como unidad
    let milisengundo2 = fecha2.getTime();

    let diferenciaMilisegundos = Math.abs (milisengundo2 - milisegundo1); // El .abs pasa a valor absoluto cualquier operacion
    
    let diferenciaDias = Math.round(diferenciaMilisegundos/(1000*60*60*24)); //pasamos los milisegundos a dias y con el .round  se utiliza para redondear un número al entero más cercano. Aquí te explico cómo funciona:

        return diferenciaDias;
}

let fechaPrimera = new Date('2001-03-23') //creamos dos objetos nuevos para poder usar la funcion con el new date
let fechaSegunda = new Date ('2002-03-23') //Se manejan así en js; el getTime funciona en ese formato

let distanciaEnDias = entreDias (fechaPrimera, fechaSegunda);

console.log(`la diferencia entre ${fechaPrimera} y ${fechaSegunda} es de ${distanciaEnDias} dias`)