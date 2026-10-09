let x;
const name = 'Axl';
const age = 23;


x = 'Hello my name is ' + name + ' and I am ' + age + ' yrs old';

console.log(x);

// Template Literals
let y;

// Use backticks
y = `Hello my name is ${name} and I am ${age} yrs old`;

console.log(y);

// String Properties and Methods
let z;

const s = "Hello World";

z = s.length;

// Access Value by Keys
z = s[1]; // e

z = s.toUpperCase(); // HELLO WORLD
z = s.toLowerCase(); // hello world

z = s.charAt(0); // H

z = s.indexOf('e') /// 1

z = s.substring(0, 4) // Hell | Starts from 0 to 4
z = s.substring(7) // orld | Starts at 7 onwards

z = s.slice(-11 , -6); // Hello

z = s.trim(); // Trim 

z = s.replace('World', 'Baby'); // Hello Baby | .replace(exsisting text, replacing text)

z = s.includes('Hello'); // True | Check if the string is included 

z = s.valueOf(s)

z = s.split(''); // Turns every character into a array
z = s.split(' '); // Turns every string into a array

console.log(z);
