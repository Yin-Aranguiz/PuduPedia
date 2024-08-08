// taskManager.js
import { Task } from "./task.js";

export class TaskList {
    constructor() {
        this.tasks = []; // Corrección en el nombre de la propiedad para que sea 'tasks' en lugar de 'task'
    }

    addTask(task) { // método que agrega al array
        this.tasks.push(task);
    }

    // Corregí el método 'listTasks' para usar 'task.displayTask()' correctamente
    listTasks() {
        return this.tasks.map(task => task.displayTask()).join(' - ');
    }

    // Corregí el método 'markTaskAsCompleted' para encontrar la tarea por descripción y marcarla como completada
    markTaskAsCompleted(taskDescription) {
        const task = this.tasks.find(t => t.description === taskDescription);
        if (!task) {
            return ['No hay descripción de tarea'];
        } else {
            const result = task.markAsCompleted();
            return [`La descripción es: ${task.description} + ${result[1]}`];
        }
    }
}
