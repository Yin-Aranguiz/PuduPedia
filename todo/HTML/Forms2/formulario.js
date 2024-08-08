const name = document.getElementById('mi-name')
const email = document.getElementById('mi-email')
const pasword = document.getElementById('mi-password')
const boton = document.getElementById('mi-boton')

function login(){  //.value es la forma de entrar al dato de un objeto
    let loguearse = name.value, email.value, password.value //significa el valor dentro del input
    console.log(loguearse)
    name.value = '' 
    email.value = ''
    password.value = ''//
}

boton.addEventListener('click',login)