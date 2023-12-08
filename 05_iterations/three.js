//  for of 

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr)  {
//     console.log(num)
// }

const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}


// Maps


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
// map doesn't take  double same values it is for uniqe  
map.set('IN', "India")


// console.log(map)

// for (const[ key, value] of map) {
//     console.log(key,':-', value);
// }

const myObject = {
    game1: 'NFS',
    game2: 'Siperman'
}
// Object is not iterable in this case
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }


    


