import { Student } from "./student.js"
import { StudentList } from "./studentList.js"




/*instancia de studentList*/

let cohorte13 = new StudentList()


/*instancia de Student*/
let estudiante1 = new Student ("Mika", 3)
let estudiante2 = new Student ("Stefi", 3)
let estudiante3 = new Student ("Pipe", 2)
let estudiante4 = new Student ("Bianca", 4)

cohorte13.addStudent(estudiante1)
cohorte13.addStudent(estudiante2)
cohorte13.addStudent(estudiante3)
cohorte13.addStudent(estudiante4)

let listadocohorte13 = cohorte13.listStudents()
console.log (listadocohorte13)



console.log (cohorte13)
cohorte13.listStudents()
