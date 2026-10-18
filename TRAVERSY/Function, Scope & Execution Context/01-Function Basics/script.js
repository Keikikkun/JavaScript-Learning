// Function: is a way to group code together for later use
// Parameters: Passed data in a function

function sayHello() // Function syntax
{
    console.log('Hello World');
}

sayHello(); // 'Hello World'

function add(num1, num2) // (Parameters)
{
    console.log(num1 + num2);
}


add(5, 10);// 15 (Arguments)

function subtract(num1, num2)
{
    return(num1 - num2); // Will not appear on the console because it's not a clg
}

 const result = subtract(10, 5); // 5

 console.log(result, subtract(50, 10)); // 5 40