const accountId = 1234455
let accountEmail = "mamaun@facebook.com"
var accountPssword = "12345"
accountCity = 'Noakhali'

// accountId = 2 not allowed

accountEmail = "hc@hecom.com"
accountPssword = "2892842"
accountCity = "Dhaka"


let accountState;

/*

Prefer not to use var because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPssword, accountCity, accountState])