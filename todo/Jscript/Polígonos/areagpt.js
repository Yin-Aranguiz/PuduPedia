// Definición de las funciones para calcular áreas de polígonos
function cuadrado(a) {
    return a * a;
}

function triangulo(a, b) {
    return (a * b) / 2;
}

// Función que determina qué tipo de polígono se tiene según la cantidad de lados
function cuantosLadosTiene(l) {
    if (l === 3) {
        return triangulo;   // Devuelve la función triangulo si tiene 3 lados
    } else if (l === 4) {
        return cuadrado;    // Devuelve la función cuadrado si tiene 4 lados
    } else {
        return null;        // Devuelve null si no es un polígono válido en este contexto
    }
}

// Ejemplos de uso de la función cuantosLadosTiene
let figura = cuantosLadosTiene(3);   // Devuelve la función triangulo
console.log(figura(6, 2));           // Calcula el área de un triángulo con base 2 y altura 3

figura = cuantosLadosTiene(3);       // Devuelve la función cuadrado
console.log(figura(2));              // Calcula el área de un cuadrado con lado 2



//////////////////////////////// cambiar la perspectiva te puede cambiar el mundo 
function calcularPoligonos (a,b){
    let areaCuadrado = cuadrado(a);
    let areaTriangulo = triangulo(a,b);
    let areaRectangulo = rectangulo(a,b);
    return {
        cuadrado: areaCuadrado, // esto genera que retorne el valor utilizando la propiedad de la funcion 
        triangulo: areaTriangulo,
        rectangulo: areaRectangulo 
    }

}