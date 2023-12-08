

function sayMyLatter() {
    console.log("H")
    console.log("I")
    console.log("h")
    console.log("y")
    console.log("h")
}

// sayMyLatter()

// function addTwoNumbers(num1, num2) {
//  console.log(num1 + num2);
// }

// function addTwoNumbers(num1, num2) {
//     // let result = num1 + num2
//     // return result
//     return num1 + num2
//    }

// const result = addTwoNumbers(3, 5)

// console.log("Result:" , result)

function loginUserMessage(username = "sam") {
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessag

