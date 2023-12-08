const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc , currval) {
//     console.log(` acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr ) => acc+curr, 0)

console.log(myTotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 100.99
    },
    {
        itemName: "Mobile dev course",
        price: 56.99
    },
    {
        itemName: " React cources",
        price: 20.99
    },
    {
        itemName: "Ruby course",
        price: 10.99
    },
    {
        itemName: "Data science course",
        price: 199.99
    },
]


const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);