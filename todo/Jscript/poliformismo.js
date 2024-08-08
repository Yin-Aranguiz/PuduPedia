// Implementar polimorfismo creando una función que acepte diferentes tipos de Animal y llame a sus métodos:

class Animal {
    // método para hacerSonido que imprime un sonido
    hacerSonido() {
        console.log('sonido de animal');
    }
}

class Gato extends Animal {
    // implementamos a gatos en el método
    hacerSonido() {
        console.log('miau-miau')
    }
}

class Perro extends Animal {
    // implementamos a perro en el método
    hacerSonido() {
        console.log('gua-gua')
    }
}

class Cerdo extends Animal {
    // implementamos a cerdo en el método
    hacerSonido() {
        console.log('oing-oing')
    }
}

// Ahora realizaremos la función que cita al método
function hacerSonidoAnimal(animal) {
    animal.hacerSonido(); //Aqui linkeamos el hacerSonido con animal para que revise en las clases el animal que ponemos
}

// Crear los let de cada animal(g,p y  c)

let Gato = new Animal();
let Perro = new Animal();
let Cerdo = new Animal();

//Llamamos a la función según el sonido que estimemos

hacerSonidoAnimal(Gato);
hacerSonidoAnimal(Perro);
hacerSonidoAnimal(Cerdo);