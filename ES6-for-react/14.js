console.clear();

const postListPromise = new Promise ((resolve, reject) => {
    axios.get('https://jsonplaceholder.typicode.com/posts', (data) => {
        console.log('GET POST LIST Response => ', data);
        resolve(100);
    }).fail(err => {
        reject(new Error(`Call failed for POst List Request with status ${err.status}`))
    });
});

postListPromise
.then((response) => {
    console.log("call success");
    console.log('Then response =>', response);
})
.catch((error) => {
    console.log("Call failed");
    console.log('Catch error =>', error);
});
