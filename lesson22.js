let arr = ["Tien", "Bich", "Ha", "Loan", "Tu", "Indie", "Haha"]
let arr2 = [1, 2, 3, 4, 5, 6, 7]

let reduce1 = arr.reduce((accu, item, curItem, array) => {
    console.log(accu, item, curItem, array);

    if (curItem == 0)
        return accu + ": " + item
    if (curItem != array.length)
        return accu + ", name" + ": " + item
    return accu + ": " + item
}, "Name")

let reduce2 = arr2.reduce((accu, item, indexCur) => {
    console.log(accu, item, indexCur);

    return accu + item
})

console.log(reduce1);
console.log(reduce2);
