// let score  = 33;
// console.log(typeof score) // number
// console.log(typeof (score)) // number

// let score  = "33";
// console.log(typeof score) // string
// console.log(typeof (score)) // string

// if we need perform opertion on number but we get value from backend is string than we can handle this.

// let convertValueInNumber = Number(score);
// console.log(convertValueInNumber) // 33
// console.log(typeof convertValueInNumber) // converted in  number

// let score  = "33a";
// let convertValueInNumber = Number(score);

// console.log(typeof score) // string

// console.log(convertValueInNumber) // NaN
// console.log(typeof convertValueInNumber) // number

// null

// let score  = null;
// let convertValueInNumber = Number(score);

// console.log(typeof score) //object

// console.log(convertValueInNumber) // 0
// console.log(typeof convertValueInNumber) // number

// undefined

// let score  = undefined;
// let convertValueInNumber = Number(score);

// console.log(convertValueInNumber) // NaN
// console.log(typeof convertValueInNumber) // number

// boolean true or false

// true
// let score  = true;
// let convertValueInNumber = Number(score);

// console.log(convertValueInNumber) // 1
// console.log(typeof convertValueInNumber) // number

// false

// let score  = "";
// let convertValueInNumber = Number(score);

// console.log(convertValueInNumber) // 0
// console.log(typeof convertValueInNumber) // number

// Summary

// "33" convert into number = 33, and after conversion type are number using typeof

// "33abc" convert into  = NaN, and after conversion type are number using typeof

// "" convert into number = 0, and after conversion type are number using typeof

// Null convert into number = 0, and after conversion type are number using typeof

// undefined convert into number = NaN, and after conversion type are number using typeof

// true convert into number = 1, and after conversion type are number using typeof

// false convert into number = 0, and after conversion type are number using typeof

// ******** number to boolean *******

// let isLoggedIn = 1;

// let getInBoolean = Boolean(isLoggedIn);
// console.log(getInBoolean); // true
// console.log(typeof getInBoolean) // boolean


// let isLoggedIn = 0;

// let getInBoolean = Boolean(isLoggedIn);
// console.log(getInBoolean); // false
// console.log(typeof getInBoolean) // boolean


// let isLoggedIn = "";

// let getInBoolean = Boolean(isLoggedIn);
// console.log(getInBoolean); // false
// console.log(typeof getInBoolean) // boolean


// summary

// 1 => true
// 0 = >  false
// "" => false
// "dd" => true
// undefined => false
// null => false


// string to number;
let someNumber = 12;

let getInStr = String(someNumber);
console.log(getInStr)
console.log(typeof getInStr)


console.log(3 + 4 * 5 % 3);