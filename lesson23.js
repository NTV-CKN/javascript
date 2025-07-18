const numbers = [1, 3, 100, 0, 20000, -1, 2]

numbers.sort()

console.log(numbers);

numbers.sort((itemCur, itemNext) => {
    return itemCur - itemNext  //case true then swap => sort by asc
})

console.log(numbers);

numbers.sort((itemCur, itemNext) => {
    return - itemCur + itemNext //case true then swap => sort by desc
})

console.log(numbers);