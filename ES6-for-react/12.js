console.clear();

// function Person(name, birthYear) {
//     this.name = name;
//     this.yearOfBirth = birthYear;

//     this.getDetails = function () {
//         return "Name: " + this.name + " and age: " + (2023 - this.yearOfBirth);
//     }
// }

class Person {
    constructor (name, birthYear) {
        this.name = name;
        this.yearOfBirth = birthYear;
    }

    getDetails = () => {
        return `Name: ${this.name} and get: ${2023 - this.yearOfBirth}`;
    }
}

var shedrack = new Person('Shedrack', 2001);
console.log(shedrack.getDetails());