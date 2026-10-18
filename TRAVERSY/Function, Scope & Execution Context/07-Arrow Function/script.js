// Default Function
function add(a,b)
{
    return a + b
}

console.log(add(2, 3));

// Arrow Function
const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(10, 5));

// Implicit Return
const multiply = (a, b) => a * b; 

console.log(multiply(5, 5));


// No parenthesis 0nly if you have 1 parameter
const double = a => a * 2;

console.log(double(10));

// Returning an object
const createObject = () => ({
    name: 'Axl'
});

console.log(createObject());

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
    console.log(n);
});

// Arrow Function in a callback
numbers.forEach( n => console.log(n));