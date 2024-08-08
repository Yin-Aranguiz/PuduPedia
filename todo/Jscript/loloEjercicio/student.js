export class Student {
    constructor (name,grade){
        this.name = name 
        this.grade = grade
    }

    displayStudent (){
        return (`${this.name} ${this.grade}`)
    }
}