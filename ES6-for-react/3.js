console.clear();

const me = 'Sheddiey';
const firstName = 'Shadrack';
const lastName = 'Kevin';

//expression as a variable
const mGreetings = `Helllooo ${me}`;

//expression as a function call
function getFullName (firstName, lastName){
    return `${firstName} ${lastName}`;
}
const moreGreetings = `Hellooo ${getFullName(firstName, lastName)}`;

console.log(moreGreetings);

//rgba(red, green, blue, alpha)
let red = 200;
let green = 123;
let blue = 290;
let alpha = .9;

const rgbaEXp = `rgba(${red}, ${green}, ${blue}, ${alpha})`
console.log(rgbaEXp);