// LEER TODO EL DOCUMENTO, TIENE DISTINTAS OPCIONES EN CUANTO A FUNCIONES.
// TIENE FUNCIÓN PARA INGRESAR TEXTO CON ENTER
// No borré lo de cambio de colores de flojo no más, pero sacarlo no debería romper nada (espero)

document.getElementById('myButton').addEventListener('click',
    function () {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        document.body.style.backgroundColor = color;
    });

// CON FUNCIÓN NOMBRADA (reciclable a través del código; por Fer)
document.getElementById('submitButton').addEventListener('click', enviarText);
function enviarText() {
    let submittedText = document.getElementById('inputGiven').value;
    console.log(submittedText);
    document.getElementById('inputGiven').value = '';
}

// CON FUNCIÓN ANÓNIMA (Felipe); sólo funcionaría acá, porque es una función que muere fuera del scope

// document.getElementById('submitButton').addEventListener('click', function () {
//     const submittedText = document.getElementById('inputGiven').value;
//     console.log(submittedText);
//     document.getElementById('inputGiven').value = '';
// })



//  PARA INGRESAR TEXTO CON ENTER, no con el click, con función anónima (Felipe)
// document.getElementById('inputGiven').addEventListener('keypress', function () {
//     if (event.key === 'Enter') {
//         const submittedText = document.getElementById('inputGiven').value;
//         console.log(submittedText);
//         document.getElementById('inputGiven').value = '';
//     }
// })




//  PARA INGRESAR TEXTO CON ENTER, con función nombrada para ver diferencias (inspirado en el anterior de Fer)
document.getElementById('inputGiven').addEventListener('keypress', sendWithEnter);
function sendWithEnter (event) {
    if (event.key === 'Enter') {
        const submittedText = document.getElementById('inputGiven').value;
        console.log(submittedText);
        document.getElementById('inputGiven').value = '';
    }
}