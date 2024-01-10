// swap two numbers

let a = 5;
let b = 10;

console.log("Before swap: ", a, b);

a = a ^ b ^ (b = a);
// a = 5 ^ 10 ^ (b = 5);
// a = 5 ^ 10 ^ 5; 
// a = 0101 ^ 1010 ^ 0101 = 1010

// a = 10;
// b = 5;

// b er moddhe a er value assign kora hoyeche then bitwise xor operation calano hoyeche.

console.log("After swap: ", a, b);

/*
Explanation: **Using bitwise XOR operator**
1. Declare two variables a and b
2. Print the values of a and b
3. Swap the values of a and b using bitwise XOR operator
4. Print the values of a and b
*/