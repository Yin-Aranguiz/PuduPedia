import { Student } from "./student.js"

export class StudentList {
    constructor () {
        this.students = []; /* array vacío */
    }
    addStudent (student) {  /* llena el array this.students, anade estudiantes*/
        this.students.push (student) /* */
    }

    listStudents () {
        return (`${this.students.map(student=>student.displayStudent()).join(' - ')}`) /* .join une todas las listas con , y un espacio vacío */
    }
}

