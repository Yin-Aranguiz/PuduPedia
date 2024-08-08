export class task{
    constructor(description, completed=false){
        this.description = description;
        this.completed = completed;
    }
    markAsCompleted(){
        if (this.completed=false)
            return [false, 'no está completa']
        else
            return[true, 'la tarea se ha completado']
    }
    displayTask(){
        return(`${this.description}`)
    }
}

import { task } from "./task";

export class taskList{
    constructor () {
        this.task = [] //array vacío que se debe llenar
    }
    addTask(task) { // método que agregar al array 
        this.task.push (task)
    }
    listTask () {
        return (`${this.task.map(task=>displayTask()).join(' - ')}`)
    }
    markTaskAsCompleted (){
        if(this.description = null )
            return ['No hay descripción de tarea' ]
        else 
            return [`La descripcion es: ${this.description}+ ${this.markAsCompleted} `]
    }
}

import { task } from "./task";
import { taskList } from "./taskManager";

let toDO = new taskList() //instanciamos el tasklist

//instancia de tareas//
let task1 = new task ('comer',false)
let task2 = new task ('hacer cama', true)
let task3 = new task ('correr',false)
let task4 = new task ('beber 1 litro de agua',true)
let task5 = new task ('entregar ejercicio',false)

toDO.addTask(task1)
toDO.addTask(task2)
toDO.addTask(task3)
toDO.addTask(task4)
toDO.addTask(task5)

let listadoDeTareas = toDO.listTask()
console.log (listadoDeTareas)

console.log (toDO)
toDO.listTask