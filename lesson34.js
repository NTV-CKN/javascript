let requestUserById = async (id) => {
    let promise = (await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`))
    if (promise.status == 404) throw new Error("Not found!")
    if (promise.status !== 200) throw new Error("Status !== 200")
    let jsonData = await promise.json()
    //callback
    console.log(jsonData);
    return jsonData
}

requestUserById("ss")
    .then(data => console.log("ahihi"))
    .catch(err => {
        if (err instanceof Error)
            console.log(err.message, "baka")
    })

//try - catch(e)