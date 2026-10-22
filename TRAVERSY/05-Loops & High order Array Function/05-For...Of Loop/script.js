// for of is a loop that operates in a sequence of values sourced from an iterable object
// Syntax: for (variable assigned of variable) {Condition}

// Loop Through arrays

const items = ['table', 'chair', 'book', 'kite']
const users = [
    {name: 'Axl'},
    {name: 'Rose'},
    {name: 'Marayag'},
];

for (const item of items) {
    console.log(item);
} 

for (const user of users) {
    console.log(user);
}

// Loop over strings

const str = 'Hello World'

for (const letter of str){
    console.log(letter);
}