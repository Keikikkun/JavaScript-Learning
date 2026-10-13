const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberries', 'blueberries', 'raspberries'];

let x;

fruits.push(berries);

x = fruits[3]; //  ['strawberries', 'blueberries', 'raspberries']

x = fruits[3][1]; // 'blueberries'

const allFruits = [fruits, berries];

console.log(allFruits);

x = allFruits[1][0]; // strawberries

console.log(x)