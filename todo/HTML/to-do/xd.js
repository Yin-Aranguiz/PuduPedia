// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Referencias a los elementos del DOM
    var form = document.getElementById('task-form');
    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');

    // Array para almacenar las tareas
    var tasks = [];

    // Cargar tareas desde localStorage (si hay alguna guardada)
    var storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        for (var i = 0; i < tasks.length; i++) {
            addTaskToDOM(tasks[i]);
        }
    }

    // Función para agregar una tarea al DOM
    function addTaskToDOM(task) {
        var li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    }

    // Manejar el envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío del formulario

        var task = taskInput.value.trim(); // Obtener el valor del input y quitar espacios innecesarios
        if (task !== '') {
            tasks.push(task); // Agregar la tarea al array
            addTaskToDOM(task); // Agregar la tarea al DOM

            // Guardar las tareas en localStorage
            localStorage.setItem('tasks', JSON.stringify(tasks));

            taskInput.value = ''; // Limpiar el input
        }
    });
});
