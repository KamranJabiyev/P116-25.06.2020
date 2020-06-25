"use strict"
//Callback function
function Sum(arr, callback) {
    let result = 0;
    for (const item of arr) {
        if (!isNaN(item) && callback(item))
            result += item;
    }
    console.log(result);
}

// function IsOdd(num) {
//     return num % 2 != 0;
// }

const IsOdd = num => num % 2 != 0;

function IsEven(num) {
    return num % 2 == 0;
}

function IsElder(num) {
    return num > 20;
}

// console.log(Sum([10, 15, 20, 25, 30], IsOdd))
// console.log(Sum([10, 15, 20, 25, 30], IsEven))
// console.log(Sum([10, 15, 20, 25, 30], IsElder))

//anonimous function
// console.log(Sum([-10, 15, 20, 25, 30], function (num) { return num > 0; }))
//Sum([-10, 15, 20, 25, 30], num => num % 3 == 0);

function CustomMap(arr, callback) {
    let result = [];
    for (const item of arr) {
        const newItem = callback(item);
        result.push(newItem);
    }
    console.log(result)
}

// CustomMap([1,2,3,4,5],4);

// CustomMap([1, 2, 3, 4, 5], n => n * 2)

// CustomMap([1, 2, 3, 4, 5], n => n + 2)
// CustomMap([1, 2, 3, 4, 5], n =>{
//     if(n-2>0){
//         return n-2;
//     }
// })

// CustomMap([1, 2, 3, 4, 5], n => n % 2 == 0)

//Array Itarations

// let arr = [1, 2, 3, 4, 5];

// let newArr = arr.map(n => n % 2 == 0);
// console.log(newArr)

// arr.forEach((n,i) => console.log("index: "+i+" ,value: "+n))

// let newArr = arr.filter(n => n >= 3);
// console.log(newArr)

// let result = arr.find(n => n == 6);
// if(result==undefined){
//     console.log("Bu eded yoxdur")
// }

// let result = arr.reduce((t, n) => t += n)
// console.log(result)

// let arr=[1,2,3,4,5]

// console.log(arr.pop())
// arr.pop()
// arr.push(6)
// arr.shift()
// arr.unshift(0)

// console.log(arr[arr.length-1])
let word="P116"
console.log(`Group - ${word}`)


