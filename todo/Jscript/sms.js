class Notification {
    enviar() {
        console.log('esta notificacion')
    }
}
class Sms extends Notification {
    enviar() {
        console.log ('¡SMS recibido!')
    }
}
class Email extends Notification {
    enviar() {                      //EL enviar significa: 
        console.log('¡Email recibido!')
    }
}
class Wsp extends Notification {
    enviar() {
        console.log('¡WSP recibido!')
    }
}

function recibido(notificacion) { // f nombre de la funcion(clase padre)
    notificacion.enviar(); // clasepadre.codigodelaclase
}

let sms = new Sms ();
let email = new Email ();
let wsp = new Wsp ();

recibido(sms);
recibido(email);
recibido(wsp);
