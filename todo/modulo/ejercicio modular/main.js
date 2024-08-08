// main.js
import { Task } from "./task.js";
import { TaskList } from "./taskManager.js";

document.addEventListener('DOMContentLoaded', () => {
    let toDo = new TaskList(); // instanciamos el TaskList

    // instancia de tareas
    let task1 = new Task('comer', false);
    let task2 = new Task('hacer cama', true);
    let task3 = new Task('correr', false);
    let task4 = new Task('beber 1 litro de agua', true);
    let task5 = new Task('entregar ejercicio', false);

    toDo.addTask(task1);
    toDo.addTask(task2);
    toDo.addTask(task3);
    toDo.addTask(task4);
    toDo.addTask(task5);

    TaskList.listTasks();

    TaskList.markTaskAsCompleted(task1,description);
    TaskList.markTaskAsCompleted(task2,description);
    TaskList.markTaskAsCompleted(task1,description);
    TaskList.markTaskAsCompleted(task1,description);
    TaskList.markTaskAsCompleted(task1,description);
    let listadoDeTareas = toDo.listTasks();
    console.log(listadoDeTareas);

    console.log(toDo);

});
