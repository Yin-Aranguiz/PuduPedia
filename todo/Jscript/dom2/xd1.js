// let bottom = document.getElementById('myButtom')

// function alerta () {
//     alert ('jelou compa')
// }

// bottom.addEventListener('click', getRandomColor)

let bottom = document.getElementById('myButton')

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


bottom.addEventListener('click', getRandomColor)

// function handleClick() {
//     alert('¡Botón clicado!');
//   }
//   document.getElementById('myButton').addEventListener('click', handleClick);
