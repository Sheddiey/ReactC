console.log();

const numArr10 = [1, 2, 3, 4, 5, 6, 7]

const mArr10 = [{
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



const resultArr = numArr10.filter((item) => {
    //console.log(item);
    //return true; //elements are added into the array
    //return false; //none of the elements are added
    //return item % 2 !==0; to return odd numbers 
    return item % 2 === 0; //returns only even numbers. 
})


const resultArr1 = mArr10.filter((item) => {
    //console.log(item.experience);
    return item.experience >= 10;
})


console.log('ResultArr => ', resultArr1);