console.clear();

//const mArr = [1, 2, 3, 4, 5];
//on objects
const mArr1 = [{
    name : 'Sheddiey',
    experience : '10',
    type: 'commercial'
},

{
    name : 'Insane',
    experience : '5',
    type: 'private'
},

{
    name : 'Sane',
    experience : '20',
    type: 'commercial'
}]


// const doubleValues = (item) => {
//     return item*2;
// }

// let newArr = [];
// for(let i=0; i<mArr.length; i++) {
//     newArr.push(doubleValues (mArr[i]));
// };

let newArr = mArr1.map((data, pos) => {
    //console.log(`Item at pos: ${pos} is ${data}`);
    console.log(data);
    return {
        name: data.name,
        experience: data.experience
    };
})


console.log(newArr);