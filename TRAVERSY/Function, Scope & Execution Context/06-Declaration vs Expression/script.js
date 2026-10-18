// Function Declaration
function addDollorSign(value)
{
    return '$' + value;
}

console.log(addDollorSign(100)); //$100

// Function Expression
const addPlusSign = function (value) // Declare it as a variable
{
    return '+' + value
};

console.log(addPlusSign(200)); // +200