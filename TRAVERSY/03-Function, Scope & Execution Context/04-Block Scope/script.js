const x = 100;
const foo = 1;
var bar = 2; // gets added in the window object

if(true)
{
    const y = 200;
    console.log(x + y);
}

// console.log(x + y); // error


for (let i = 0; 1 <= 10; i++)
{
    console.log(i);
}

// console.log(i); // error

if (true)
{
    const a = 500;
    let b = 600;
    var c = 700;
}

console.log(c); // var is not block scope

function run()
{
    var d = 100;

    console.log(d);
}

run();

// console.log(d); // Var is function scope