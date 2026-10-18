// IIFE
(function () {
    const user = 'John';
    console.log(user);

    const hello = () => console.log('Hello from IIFE');
})(); // Another parenthesis to invoke it

(function (name)
{
    console.log('hello ' + name);
})('Shawn')


(function hello() {
    console.log('Hello');
})();

