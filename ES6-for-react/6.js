console.clear();

/*Arrays
let mArr1 = [1, 2, 3, 4, 5];
//let mArr2 = [...mArr1];
let mArr2 = [7, 8, 9];

//let mArr3 = mArr1.concat(mArr2);
//mArr1.push(6);
//using the spread operator to concat several arrays
let mArr3 = [0, ...mArr1, ...mArr2, 12];

console.log(mArr3); */

//objects
let obj1 = {
    name: 'Messhack',
    lastName: 'Hart'
}

let obj2 = {
    age: 21
}

let obj3 = {...obj1, ...obj2};
console.log(obj3);