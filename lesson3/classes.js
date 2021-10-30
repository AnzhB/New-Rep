class School {
    constructor(name, level, numberOfStudents){
        this._name = name
        this._level = level
        this._numberOfStudents = numberOfStudents
    }
    get name(){
        return this._name
    }
    get level(){
        return this._level
    }
    get numberOfStudents(){
        return this._numberOfStudents
    }
    set numberOfStudents(value){
        if(typeof(value) === 'number'){
            this._numberOfStudents = value
        } else{
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
    }
    quickFacts(){
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} level.`)
    }
    static pickSunstituteTeacher(substituteTeachers){
        const substituteTeacherIndex = Math.floor(Math.random() * Math.floor(substituteTeachers.length));
        return substituteTeachers[substituteTeacherIndex]
    }
}

class PrimarySchool extends School{
    constructor(name, level, numberOfStudents, pickupPolicy){
        super(name, level, numberOfStudents)
        this._pickupPolicy = pickupPolicy
    }
    get pickupPolicy(){
        return this._pickupPolicy
    }
}

class HighSchool extends School{
    constructor(name, level, numberOfStudents, sportTeams){
        super(name, level, numberOfStudents)
        this._sportTeams = sportTeams
    }
    get sportsTeams(){
        console.log(this._sportTeams)
    }
}

class MiddleScholl extends School{
    constructor(name, level, numberOfStudents){
        super(name, level, numberOfStudents)
    }
}


const mySchool = new School('First School', 1, 1000)

const myPrimarySchool = new PrimarySchool('Second School', 2, 2000, 'Parents have to deliver their children')

console.log(myPrimarySchool.pickupPolicy)