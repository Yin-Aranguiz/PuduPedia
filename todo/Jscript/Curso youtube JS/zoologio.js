// Definición de la clase Zoo
class Zoo {
    constructor(animal, edad, altura) {
        this.animal = animal; // Propiedad nombre del animal
        this.edad = edad;     // Propiedad edad del animal
        this.altura = altura; // Propiedad altura del animal en cm
    }

    // Método para mostrar la información del animal
    mostrarInfo() {
        return `Animal: ${this.animal}, Edad: ${this.edad}, Altura: ${this.altura} cm`;
    }
}
// Crear instancias de la clase Zoo
let zorroCulpeo = new Zoo('zorroCulpeo', 5, 60); // Altura en cm
console.log(zorroCulpeo.mostrarInfo());

let pandaRojo = new Zoo('pandaRojo', 3, 55);
console.log(pandaRojo.mostrarInfo());

let tigre = new Zoo('tigre', 12, 100);
console.log(tigre.mostrarInfo());

let jirafa = new Zoo('jirafa', 14, 500);
console.log(jirafa.mostrarInfo());

let koi = new Zoo('koi', 1, 25);
console.log(koi.mostrarInfo());

const animales = [
    zorroCulpeo,
    pandaRojo,
    tigre,
    jirafa,
    koi
];
// Mostrar la información de los animales
animales.forEach(animal => {
    console.log(animal.mostrarInfo());
});

// Función para ordenar animales por edad
function ordenarPorEdad(animales) {
    return animales.slice().sort((a, b) => b.edad - a.edad);
}
