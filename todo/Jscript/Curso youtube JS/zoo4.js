class Zoo {
    constructor(animal, edad, altura) {
        this.animal = animal; // Propiedad nombre del animal
        this.edad = edad; // Propiedad edad del animal
        this.altura = altura; // Propiedad altura del animal en cm
    }

    // Método para mostrar la información del animal
    mostrarInfo() {
        return `Animal: ${this.animal}, Edad: ${this.edad}, Altura: ${this.altura} cm`;
    }
}
class Rescatista extends Zoo  {
    constructor(animal, edad, altura, nombre) {
        super(animal, edad, altura, ); // llama al constructor
        this.nombre = nombre;
    }
    apadrinar() {
        return `${this.nombre} rescató a ${this.animal}`
    }
}

// Crear instancias de la clase Zoo
let zorroCulpeo = new Rescatista ('zorroCulpeo', 5, 60, 'cristian'); // Altura en cm
let pandaRojo = new Rescatista ('pandaRojo', 3, 55, 'antonio');
let tigre = new Rescatista ('tigre', 12, 100, 'felipe');
let jirafa = new Rescatista ('jirafa', 14, 500, 'constanza');
let koi = new Rescatista ('koi', 1, 25, 'gabriel');

console.log(zorroCulpeo.apadrinar())
console.log(pandaRojo.apadrinar())
console.log(tigre.apadrinar())
console.log(jirafa.apadrinar())
console.log(koi.apadrinar())

