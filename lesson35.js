//...
const user = { name: "Vũ", age: 25 };
const updatedUser = { ...user, age: 26 }; // { name: "Vũ", age: 26 }
const updatedUser2 = { ...updatedUser, exp: -1 }; // { name: "Vũ", age: 26, exp: -1 }
console.log(user, updatedUser, updatedUser2);

let arr = [1, 2, 3, 4, 5, 6, 7]

let test = (...params) => {
    params.push(7)
    console.log(params, params.length);
    console.log(arr, arr.length);
}

test(...arr)
console.log("==================");
test(arr)
console.log("==================");

let {age} = updatedUser2
console.log(age);

let [, a, b] = arr
console.log(a, b);
