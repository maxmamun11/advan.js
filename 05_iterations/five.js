
// 
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(  function (val){
//     console.log(val);
// })

// This is arrow function 
// coding.forEach( (item) => {
//     console.log(item);
// })


function printMe(item){
    console.log(item);
}

coding.forEach(printMe)