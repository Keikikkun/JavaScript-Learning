const x = 100; // Global Scope

console.log(x, ' in global');

function run()
{
    console.log(window.innerHeight);
    console.log(x, ' in function'); // Accessed inside a function 
}

run();

if (true)
{
    console.log(x, ' in block'); // Accessed inside a block if statement
}

function add()
{
    const y = 50; // Function scope
    console.log(y + x);
}

add();