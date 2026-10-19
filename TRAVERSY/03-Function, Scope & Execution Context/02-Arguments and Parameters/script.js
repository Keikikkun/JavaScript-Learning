function registerUser(user = 'Bot') // Default parameters
{
    return user + ' is registered';
}

console.log(registerUser('John')); // 'John is registered

// Rest Parameters

function sum(...numbers) // This will put all arguments into an array named numbers
{
    let total = 0;

    for(const num of numbers) // for loop to add all num inside numbers
    {
        total += num;
    }

    return total;
} 

console.log(sum(1, 2, 3)); // 6

//Object as parameters

function loginUser(user)
{
    return `The user ${user.name} with the id of ${user.id} is logged in! `
}

const user = 
{
    id: 1,
    name: 'Axl',
}

console.log(loginUser(user));
console.log(loginUser({id: 2, name: 'Rose',}));

// Arrays as Parameters
function rnd(...arr)
{
    let x =  Math.floor(Math.random() * arr.length);
    return arr[x];
}

console.log(rnd(2, 3, 6, 4));
