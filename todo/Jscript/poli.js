// Hacer poliformismo con hábitat 
class Persons {
    constructor (nombre) {
        this.nombre = nombre;
    }
}
class Asta extends Persons {
    habitat() {
        console.log(`${this.nombre} vive en el reino del trebol`);
    }
}

class Luffy extends Persons {
    habitat() {
        console.log(`${this.nombre} vive en un barco`);
    }
}
class Naruto extends Persons {
    habitat(){
        console.log(`${this.nombre} vive en la aldea de la hoja`);
    }
}

function hogar(persons) {
    persons.habitat();
}

// Crear instancias de las clases
let asta = new Asta('Asta');
let luffy = new Luffy('Luffy');
let naruto = new Naruto('Naruto');

// Llamar a la función hogar con las instancias creadas
hogar(asta);
hogar(luffy);
hogar(naruto);