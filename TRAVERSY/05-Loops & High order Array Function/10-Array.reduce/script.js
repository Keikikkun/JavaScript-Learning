// reduce() method is used to reduce your array down to a single value
// reduce() is the total of all the elements in a array

const numbers = [1,2,3,4,5,6,7,8,9,10];


// Long form
const sum = numbers.reduce(function (accumulator, current) {
    return accumulator + current;
}, 0);

console.log(sum); // 55

// Short form

const sum2 = numbers.reduce((acc, curV) => acc + curV, 0);

console.log(sum2); // 55

// Using a for loop
const sum3 = () => {
    let acc = 0;
    for (const curV of numbers) {
        acc += curV;
    }
    return acc;
};

console.log(sum3());


const cart = [
    {id: '1', name: 'product 1', price: 130},
    {id: '2', name: 'product 2', price: 160},
    {id: '3', name: 'product 3', price: 250}
]

const total = cart.reduce((acc, curV) => acc + curV.price, 0);

console.log(total);