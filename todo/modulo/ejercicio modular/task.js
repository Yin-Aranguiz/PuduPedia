// task.js
export class Task {
    constructor(description, completed = false) {
        this.description = description;
        this.completed = completed;
    }

    // Cambié el operador de asignación (=) por el operador de comparación (===) para verificar si 'completed' es falso
    markAsCompleted() {
        if (this.completed === false) {
            this.completed = true; // Actualiza el estado a 'true' cuando la tarea se marca como completada
            return [true, 'la tarea se ha completado'];
        } else {
            return [false, 'no está completa'];
        }
    }

    displayTask() {
        return `${this.description}`;
    }
}
