// Falsy Values:
// - false
// - 0
// - "" or ''
// - null
// - undefined
// - NaN

const { use } = require("react");



const x = '';

if (x) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

console.log(Boolean(x)); false

// Truthy values
// - Everything else that is not falsy
// - true
// - '0' 0 on a string
// - 'false' on a string
// - [empty array]
// - {empty object}
// - function () {} empty function

// Truthy and falsy caveats
const children = 2;

if (!isNaN(children)) {
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter number of childrens');
}
    

// Checking for empty array

const post = ['post 1', 'post 2'];

if (post.length > 0) {
    console.log('List Posts');
} else  {
    console.log('No Post');
}

// Checking Empty Objects

const user = {
    name: 'Axl'
}

if (user) {
    console.log('list user');
} else {
    console.log('No User');
}

