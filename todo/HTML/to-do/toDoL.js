
    const form = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    let tasks = obtenerTareas(); // Obtener tareas almacenadas al cargar la página

    // Función para obtener las tareas almacenadas en localStorage
    function obtenerTareas() {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    }

    // Función para guardar las tareas en localStorage
    function guardarTareas() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Función para agregar una tarea al DOM
    function addTaskToDOM(task) {
        const li = document.createElement('li');
        li.textContent = task;

        // Botón de eliminar tarea
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', function() {
            deleteTask(task);
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }

    // Función para eliminar una tarea
    function deleteTask(taskToDelete) {
        tasks = tasks.filter(task => task !== taskToDelete);
        guardarTareas(); // Actualizar localStorage
        renderTasks(); // Renderizar nuevamente las tareas en el DOM
    }

    // Función para renderizar todas las tareas
    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach(task => addTaskToDOM(task));
    }

    // Manejar el envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        const task = taskInput.value.trim(); // Obtener el valor del input y quitar espacios innecesarios
        if (task !== '') {
            tasks.push(task); // Agregar la tarea al array
            guardarTareas(); // Guardar las tareas en localStorage
            renderTasks(); // Renderizar nuevamente las tareas en el DOM
            taskInput.value = ''; // Limpiar el input
        }
    });

    // Cargar tareas almacenadas al cargar la página por primera vez
    renderTasks();