console.clear();



// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
// xhr.send();
// xhr.responseType = "json";
// xhr.onload = () => {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     console.log(xhr.response);
//   } else {
//     console.log(`Error: ${xhr.status}`);
//   }
// };


// fetch(url, {
//     method: "GET" // default, so we can ignore
    
// })


// $.get("https://jsonplaceholder.typicode.com/posts/1", (data, status) => {
//   console.log(data);
// });

 let list = [];
$.get("https://jsonplaceholder.typicode.com/posts/1", (response) =>{
    console.log(response);

    const id = 1; 
    $.get(`https://jsonplaceholder.typicode.com/posts/${id}`, (response) => {
        console.log(response);

        $.get(`https://jsonplaceholder.typicode.com/comments/${id}`, (response) => {
            console.log(response);
        });
    });
}).fail(err => {
    console.log(err);
});



console.log(list);
