
function cuadradoYrectangulo (a,b){
    return (a*b) ;
}
function triangulo (a,b){
    return (a*b)/2 ;
}


function cuantosLadosTiene (l){
    if (l== 3){
        return triangulo;
    } else if (l== 4){
        return cuadradoYrectangulo;
    } else {
        return null;
    }
}

let figura = cuantosLadosTiene(3); // triangulo 
console.log(figura(2,3));

figura = cuantosLadosTiene(4); //rectangulo
console.log(figura(2,4)); 

figura = cuantosLadosTiene(4); //cuadrado
console.log(figura(4,4)); 