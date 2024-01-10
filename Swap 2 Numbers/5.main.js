// swap two numbers

let a = 5;
let b = 10;

console.log("Before swap: ", a, b);

[a, b] = [b, a]; // [10, 5]

console.log("After swap: ", a, b);

/*
Explanation: **Using array destructuring**
1. Declare two variables a and b
2. Print the values of a and b
3. Swap the values of a and b using array destructuring
4. Print the values of a and b
*/