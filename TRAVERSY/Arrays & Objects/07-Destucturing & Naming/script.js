const firstName = 'Axl';
const lastName = 'Marayag';
const age = 22;

const person = {
    firstName,
    lastName,
    age,
};

console.log(person.age); // 30

// Destructuring

//Object
const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'Axl'
    }
};

//Destructuring the Object const {} = 'object'
const {id: todoID, // Rename a key
    title, 
    user: { name } // w/ curly braces: Destructuring, w/o curly braces: Renaming
} = todo;

console.log(id, title); // 1 'Take out trash'
console.log(name); // 'Axl'
console.log(todoID); // 1

// Destructuring Arrays

const numbers = [43, 64, 23, 68];

const [first, second, ...rest] = numbers;

console.log(first, second); // 43, 64
console.log(first, second, rest); // 43, 64, 23, 58
