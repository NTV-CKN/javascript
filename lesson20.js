let arr = ["Nhan Nhuc", "Vai thieu", "J97", "ThienAn", "meoBEO", 1]

let find = arr.find((item, index, array) => {
    if (item.length > 3) {
        console.log("hello", item)
       // return item
    }

})

let filter = arr.filter((item, index, array) => {
    if (item.length > 3) {
        console.log("hello", item)
        return item
    }

})
console.log(find);
console.log(filter);

