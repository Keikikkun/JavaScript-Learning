// Primitive Data Types
// - String: a sequence of characters

const firstName = 'Axl';

const output = firstName;

console.log(firstName, typeof output);

// - Integers: Numbers

const age = 30;

const outputInt = age;

console.log(age, typeof outputInt);

// - Boolean: Logical entry / True | False

const hasKids = true;

console.log(hasKids, typeof hasKids);

// - Null: Intentional Absence

const aptNumber = null;

console.log(aptNumber, typeof aptNumber);

// - Undefined: Variable that has not been identified

const score = undefined;

console.log(score, typeof score);

// - BigInt: Number that is greater than integers

const n = 1092921094235n;

console.log(n, typeof n)

// Reference Types (Objects)
// - The variable is given a reference to that value

const numbers = [1,2,3,4];

console.log(numbers, typeof numbers)

const person = {
    name: 'Axl'
}

console.log(person, typeof person)

function sayHello()
{
    console.log("Hello");
}

const hello = sayHello;

console.log(hello, typeof hello);

// Static vs Dynamic Typing
// JS is a dynamically-typed languange
