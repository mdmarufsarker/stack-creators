// swap two numbers

let a = 5;
let b = 10;

console.log("Before swap: ", a, b);

a ^= b;
// a = a ^ b;
// a = 0101 ^ 1010;
// a = 1111; // 15
b ^= a;
// b = b ^ a;
// b = 1010 ^ 1111;
// b = 0101; // 5
a ^= b;
// a = a ^ b;
// a = 1111 ^ 0101;
// a = 1010; // 10

console.log("After swap: ", a, b);

/*
Explanation: **Using bitwise XOR operator**
1. Declare two variables a and b
2. Print the values of a and b
3. Swap the values of a and b using bitwise XOR operator
4. Print the values of a and b
*/