console.log(10 > 20 && 30 >  15 && 40 > 30); // false
console.log(10 > 20 && 30 >  15 && 40 > 30); // True

console.log(10 > 20 || 30 > 15); // True
// && - Will return the first falsy values or the last value
let a;

a = 10 && 20; // 20
a = 10 && 20 && 30; // 30
a = 10 && 0 && 30; // 30
a = 10 && '' && 0 && 30; // ''

console.log(a);

const post = ['Post 1', 'Post 2'];
console.log(post[0]); // 'Post 1'

// When there are no values on the array
const posts = [];
console.log(post[0]); // Undefined
post.length > 0 && console.log(posts[0]); // No output

// || - Will return the first truthy value or the last

let b;

b = 10 || 20; // 10
b = 0 || 20; // 20
b = 0 || null || '' || undefined; // undefined

console.log(b);

// ?? - Returns the right operand when the left is null or undefined

let c;

c = 10 ?? 20; // 20
c = null ?? 20; // 20
c = undefined ?? 30; // 30
c = 0 ?? 30 // 0
c = '' ?? 30// ' '

console.log(c);