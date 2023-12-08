const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: " ruby",
    swift: "swift by apple"
}


// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`)
// }

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);   
}

// if some this is not iteratble it doesn't write in the come
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('FR', "France")
// // map doesn't take  double same values it is for uniqe  
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
   
// }


// note  if we would like to loop on object we should use forin loop or  arrays we will use forof loop

