// let requestUserById = (id) => {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status == 200) {
//             resolve(this.responseText)
//         } else if (this.status === 404) {
//             reject("Not found!")
//         }
//     };//callback
//     xhttp.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
//     xhttp.send();
// }

let count = 1

let requestUserById = (id) => {
    if (count > 3) return
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(data => {
            console.log("then1", data)
            requestUserById(++count)
            return data.json()
        })
        .then(data => console.log("then2", data))
        .then(data => console.log("then3"))
        .catch(ex => console.log("something wrongs", ex))
}

requestUserById(count)