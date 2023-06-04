console.clear();

const postListPromise1 = new Promise ((resolve, reject) => {
    $.get('https://jsonplaceholder.typicode.com/posts', (data) => {
        console.log('Sending list call');
        console.log('GET POST LIST Response => ', data);
        resolve(data);
    }).fail(err => {
        reject(new Error(`Call failed for POst List Request with status ${err.status}`))
    });
});

const postDetailsPromise = () => new Promise ((resolve, reject) => {
    console.log('Sending details call');
    $.get(`https://jsonplaceholder.typicode.com/posts/1`, (data) => {
        resolve(data);
    }).fail(err => {
        reject(new Error `DETAILS CALL FAILED and status ${err.status}`)
    })
})


postListPromise1
.then(postDetailsPromise) //to ensure that the postDetailsPromise run after postListpromise1
.then(response => {
    console.log('POST DETAILS RESPONSE => ',response)
})
.catch((error) => {
    console.log("Call failed");
    console.log('Catch error =>', error);
})