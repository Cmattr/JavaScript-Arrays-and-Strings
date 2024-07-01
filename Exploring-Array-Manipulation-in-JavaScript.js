let fruits = ["apple", "orange", "grapes", "banana"]

// use push to add item to array
fruits.push("strawberry")
console.log(fruits)

// use pop to remove item from array
fruits.pop()
console.log(fruits)

let numbers = [4, 2, 3, 5, 1]

// use sort to sort the array
numbers.sort()
console.log(numbers)

// use map to double the numbers
function double(arr) {
    return arr.map(num => num*2)
}
console.log(double (numbers))

function filterNumbers(arr){
    return arr.filter(num => num % 2 === 0)
}
console.log(filterNumbers(numbers))

// use reduce to add numbers together
function calculateSum(arr) {
    return arr.reduce((acc,curr) => acc + curr, 0)
}
console.log(calculateSum(numbers))