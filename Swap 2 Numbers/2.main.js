// swap two numbers

let a = 5;
let b = 10;

console.log("Before swap: ", a, b);

a = a + b; // 15
b = a - b; // 5
a = a - b; // 10

console.log("After swap: ", a, b);

/*
Explanation: **Using arithmetic operators**
1. Declare two variables a and b
2. Print the values of a and b
3. Add the values of a and b and assign it to a
4. Subtract the value of b from a and assign it to b
5. Subtract the value of b from a and assign it to a
6. Print the values of a and b
*/