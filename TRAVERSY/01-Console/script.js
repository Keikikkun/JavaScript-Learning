console.log("Hello World");

console.log(20, 'Hello', true); // Can console log any data types

x = 23;

console.log(x);

console.error('Alert')

console.warn('Warn');

console.table({name: 'Axl', email: 'axl@gmail.com'}); //Used for Objects

console.group('simple');
console.log("Hello World");
console.log(20, 'Hello', true); 
console.log(x);
console.groupEnd();

const style = 'padding: 10px; background-color: white; color: green;'

console.log('%cHello world', style)