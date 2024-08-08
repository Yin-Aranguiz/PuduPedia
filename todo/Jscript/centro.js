//hacer una condicion que verifique si viven lejos del centro

let dist= parseInt(prompt('introduce la distancia en km que existe de tu hogar a plaza de armas: '));

if (dist<=1){  //uso como metrica 1 km 
    console.log('Vives al lado compa');
}else if (dist<=5){
    console.log('vives cerca');
}else if (dist<=10){
    console.log('vives medianamente lejos');
}else{
    console.log('Vives muy lejos compa');
}
