console.clear();

const postListPromise = new Promise ((resolve, reject) => {
    $.get('https://github.com/Sheddiey', (data) => {
        console.log('GET POST LIST Response => ', data);
        resolve(data);
    }).fail(err => {
        reject(new Error(`Call failed for POst List Reequest with status ${err.status}`))
    })
})