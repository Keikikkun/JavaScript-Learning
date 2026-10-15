const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberries', 'blueberries', 'raspberries'];

let x;

fruits.push(berries);

x = fruits[3]; //  ['strawberries', 'blueberries', 'raspberries']

x = fruits[3][1]; // 'blueberries'

const allFruits = [fruits, berries];

console.log(allFruits);

x = allFruits[1][0]; // strawberries

// Concatination

x = fruits.concat(berries);

// Spread Operator (...)

x = [...fruits, ...berries]

// Flatten Arrays
const arr = [1, 2 [3, 4] , 5 , [6, 7], 8]

x = arr.flat();

// Static Methods on Array objects

x = Array.isArray // Checks to see if it is a array

x = Array.from('12345')

const a = 1;
const b = 2;
const c = 3;


x = Array.of(a, b, c)

console.log(x)