// Ex 1
let rgb: [number, number, number] = [1, 2, 3];
let tup: [string, number, boolean]
tup = ["asd", 123, true]; // can't be 123,true,"asd", you need to keep the order
// In contrary to:
// let user: (string | number | boolean)[] = [false,"cos",321];

//Ex 2
let employee: [number, string][];
employee = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];

// Ex 3 - Accesing tuple elements
let emp: [number, string] = [1, "Steve"];
emp[0]; // returns 1
emp[1]; // returns "Steve"

// Ex 4 - Adding elements 
emp.push(2, "Bill"); 
console.log(emp); //Output: [1, 'Steve', 2, 'Bill']
