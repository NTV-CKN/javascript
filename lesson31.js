// getTodos(callMe)
let endpoint = 0

let callbackAsync = (resolve, reject) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status == 200) {
            resolve(this.responseText)
        } else if (this.status === 404) {
            reject("Not found!")
        }
    };//callback
    xhttp.open("GET", `https://jsonplaceholder.typicode.com/todos/${endpoint}`, true);
    xhttp.send();
}

function getPromise(id) {
    endpoint = id
    return new Promise(callbackAsync)
}

getPromise(1)
    .then(data => {
        console.log("id", 1, data)
        //return "HIHI"
        return getPromise(2)
    })
    .then(data => {
        console.log("id", 2, data);
        //return getPromise("Ss")
        return getPromise(3)
    })
    .then(data => console.log("id", 3, data))
    .catch(reject => console.log(reject))




