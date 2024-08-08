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
let pandaRojo = new Zoo('pandaRojo', 3, 55);
let tigre = new Zoo('tigre', 12, 100);
let jirafa = new Zoo('jirafa', 14, 500);
let koi = new Zoo('koi', 1, 25);

// Crear un array con las instancias de Zoo
const animales = [
    zorroCulpeo,
    pandaRojo,
    tigre,
    jirafa,
    koi
];

// Función para ordenar animales por edad
function ordenarPorEdad(animales) {
    return animales.slice().sort((a, b) => b.edad - a.edad);
}

// Función para ordenar animales por altura
function ordenarPorAltura(animales) {
    return animales.slice().sort((a, b) => b.altura - a.altura);
}

// Ordenar y mostrar los animales por edad
console.log("\nAnimales ordenados por edad:");
ordenarPorEdad(animales).forEach(animal => {
    console.log(animal.mostrarInfo());
});

// Ordenar y mostrar los animales por altura
console.log("\nAnimales ordenados por altura:");
ordenarPorAltura(animales).forEach(animal => {
    console.log(animal.mostrarInfo());
});