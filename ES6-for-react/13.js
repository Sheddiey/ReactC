console.clear();

// class Pilot {
//     constructor (exp, type, license) {
//         this.experience =exp;
//         this.type =type;
//         this.license =license;
//     }
//     getData = () => {
//         console.log(`Experience: ${this.experience}, type: ${this.type} and license: ${this.license}`);
//     }
// }

// const jonh = new Pilot (23, 'Private', 'Q2365');
// jonh.getData(); //calling the getData() functiom
// console.log(jonh);

class Person2 {
    constructor (name, yearOfBirth) {
        this.name =name;
        this.yearOfBirth =yearOfBirth;
    }

    getDetails1 = () => {
       return `Name: ${this.name} and age: ${2023-this.yearOfBirth}`;
    }
}

class Pilot extends Person2{
    constructor (name, birthyear, exp, type, license) {
        super(name, birthyear); 
        this.experience =exp;
        this.type =type;
        this.license =license;
    }
    //to access something from the child class
    getData = () => {
        console.log(`${this.getDetails1()} and Experience: ${this.experience}, type: ${this.type} and license: ${this.license}`);
    }
}

const jonh = new Pilot ('Nikola Tesla', 1856, 23, 'Private', 'Q2365');
console.log(jonh);
jonh.getData(); //calling the getData() functiom

//we can also print multiple objects
const tete = new Pilot('Cheruiyot', 2001, 4, 'Commercial', 'Q1287');
tete.getData();
