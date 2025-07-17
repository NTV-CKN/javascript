let arr = [1, 2, 3, 4, 5]

// for (let i = 0; i < arr.length; i++) {
//     arr[i] *= arr[i]
//     console.log("value at index i =", arr[i]);
// }

let mapArr = arr.map((item, index) => {
    return "value item * 2 = " + (item * 2)
})

for (let i = 0; i < mapArr.length; i++) {
    console.log("Map Arr " + i + mapArr[i]);
    
}