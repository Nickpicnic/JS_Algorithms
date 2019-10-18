class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    makrLate(){
        this.tardies++;
        if (this.tardies >= 3) {
            return "You are expelled!";
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score){
        this.scores.push(score);
        return this.scores
    }
    calculateAverage(){
        let sum = this.scores.reduce((a, b) => {return a+b;})
        return sum / this.scores.length
    }
    static enrollStudents(...students){
        return `ENROLLING STUDENTS!`
    }
}

let firstStudent = new Student("Nick", "Ovchinnikov", 3);

console.log(firstStudent.fullName()); // Your full name is Nick Ovchinnikov

let secondStudent = new Student("Colt", "Steele", 2);
console.log(secondStudent.addScore(92));
console.log(secondStudent.addScore(87));

console.log(Student.enrollStudents([firstStudent, secondStudent]));