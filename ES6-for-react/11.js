console.clear();

/* const numArr = [-1, -2, -3, -4, 1, 2, 3, 4];

numArr.find(item => {
    console.log(item);
});  */

const numArr1 = [-1, -2, -3, -4, 1, 2, 3, 4, 20]

//const result = numArr.find(item => {
    ///return true;
    //to return the first even number  && to get a number greater than 0
   // return item % 2 === 0 && item >= 0;  
//})

const result = numArr1.findIndex(item => { //to find the positioon of the first positive even number
    return item % 5 === 0 && item >= 0;  
})


console.log('Result =>', result);

