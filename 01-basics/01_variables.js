// console.log(
//   "My goal is to learn JavaScript to build my own products, such as social media platforms like Facebook and e-commerce sites like Amazon, as well as many other products. That's why I am learning JavaScript."
// );

const accountId = 123456;
let accountEmail = "umair@google.com";
var accountPassword = "123";
accountCity = "Uk";
let accountState;
// accountId = 789;  // not allowed
// console.log(accountId)

accountEmail = "umair@facebook.com";
accountPassword = 212121;
accountCity = "germany";

/*
Prefer not to use var 
b/c of issue in block scope and functional scope.

*/
console.table([accountEmail, accountPassword, accountCity,accountState]);
