// PQ 1

let number = [1, 2, 3, 4, 5];

let Square = number.map((number) => number * number);

console.log(Square);

let Sum = Square.reduce((ans, el) => ans + el );

let avg = Sum / number.length;
console.log(avg);

console.log(Sum);

// PQ 2

let num = [2, 8, 6, 7, 12, 9];

console.log(num.map((num) => num + 5));

// PQ 3

let arr = ["abhi", "aman", "raja", "ayush"];

console.log(arr.map((arr) => arr.toUpperCase()));

// PQ 4


let doubleAndReturnArgs = (arr, ...args) => [
    ...arr, ...args.map((num)=> num * 2),
];

console.log(doubleAndReturnArgs([1, 2 , 3], 4, 5, 6));

// PQ 5

function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}

let result = mergeObjects(
    { a: 1, b: 2 },
    { c: 3, d: 4 }
);

console.log(result);