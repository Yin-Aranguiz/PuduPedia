// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene una referencia al botón usando su ID
    let button = document.getElementById('myButton');

    // Función para generar un color aleatorio
    function getRandomColor() {
        const letters = '0123456789ABCDEF'; // Posibles caracteres hexadecimales
        let color = '#'; // Inicia con el carácter '#'
        for (let i = 0; i < 6; i++) { // Bucle para generar seis caracteres
            color += letters[Math.floor(Math.random() * 16)]; // Añade un carácter aleatorio
        }
        return color; // Retorna el color generado
    }

    // Añade un evento 'click' al botón
    button.addEventListener('click', () => {
        // Cambia el color de fondo del cuerpo del documento
        document.body.style.backgroundColor = getRandomColor();
    });
});




