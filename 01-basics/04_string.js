// console.log("string");

// let name = "Umair";
// console.log(`My name is ${name.toUpperCase()}`);

// another way of declared string

let newName = new String("umair abbasi");
// console.log(`My name is ${newName.toUpperCase()}`);

// console.log(newName[0])
// console.log(newName.__proto__)

// console.log(newName.length)
// console.log(newName.toUpperCase())
// console.log(newName.charAt(4)) // r
// console.log(newName.indexOf('a')) // 2 match first value from staring and return that value index number
// console.log(newName.lastIndexOf('a')) // 4 match first value from ending and return that value index number

// let newStr = newName.substring(0,4)  // 0 => 3 not include 4 index
// console.log(newStr)

// let anotherStr = newName.slice(-8, 9)
// console.log(anotherStr)

// let name  = "             Umair           "
// console.log(name.trim());

// let newStr = "Umair abbasi";
// let val = newStr.replace("Umair abbasi", "uzair khan");

// console.log(val);



let str = "Hello, World!";

// 1. length - Returns the length of a string
console.log(str.length); // 13

// 2. charAt() - Returns the character at the specified index
console.log(str.charAt(1)); // "e"

// 3. charCodeAt() - Returns the Unicode of the character at the specified index
console.log(str.charCodeAt(1)); // 101

// 4. concat() - Joins two or more strings
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(", ", str2)); // "Hello, World"

// 5. includes() - Checks if a string contains a specified value
console.log(str.includes("World")); // true

// 6. indexOf() - Returns the index of the first occurrence of a specified value
console.log(str.indexOf("World")); // 7

// 7. lastIndexOf() - Returns the index of the last occurrence of a specified value
let str3 = "Hello, World! Hello, World!";
console.log(str3.lastIndexOf("World")); // 20

// 8. replace() - Replaces a specified value with another value
console.log(str.replace("World", "Universe")); // "Hello, Universe!"

// 9. slice() - Extracts a part of a string and returns a new string
console.log(str.slice(7, 12)); // "World"

// 10. split() - Splits a string into an array of substrings
console.log(str.split(", ")); // ["Hello", "World!"]

// 11. substring() - Extracts characters from a string between two specified indices
console.log(str.substring(7, 12)); // "World"

// 12. toLowerCase() - Converts a string to lowercase letters
console.log(str.toLowerCase()); // "hello, world!"

// 13. toUpperCase() - Converts a string to uppercase letters
console.log(str.toUpperCase()); // "HELLO, WORLD!"

// 14. trim() - Removes whitespace from both ends of a string
let str4 = "  Hello, World!  ";
console.log(str4.trim()); // "Hello, World!"

// 15. startsWith() - Checks if a string starts with specified characters
console.log(str.startsWith("Hello")); // true

// 16. endsWith() - Checks if a string ends with specified characters
console.log(str.endsWith("World!")); // true

// 17. repeat() - Returns a new string with a specified number of copies of an existing string
let str5 = "Hello";
console.log(str5.repeat(3)); // "HelloHelloHello"

// 18. padStart() - Pads the current string with another string until it reaches the given length, starting from the beginning
let str6 = "5";
console.log(str6.padStart(3, "0")); // "005"

// 19. padEnd() - Pads the current string with another string until it reaches the given length, starting from the end
console.log(str6.padEnd(3, "0")); // "500"

// 20. match() - Searches a string for a match against a regular expression and returns the matches
console.log(str.match(/World/)); // ["World"]

