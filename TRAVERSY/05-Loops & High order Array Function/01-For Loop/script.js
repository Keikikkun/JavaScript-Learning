// for (initialExpression; conditionalExpression; IncrementalExpression)
// statement;


// Standard for loop
// for (let i = 0; i <= 10; i++) {
//     if (i === 7) {
//         console.log('7 is my lucky number');
//     } else {
//         console.log('number' + 1);
//     }
// }

// Nested for loop

// for (let i = 1; i <= 10; i++)
// {
//     console.log('Number' + i);

//     for (let j = 1; j <= 10; j++)
//     {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
// }

// Loop through Array

const name = ['Axl', 'James', 'Marlon', 'Raymond', 'Linda'];

for (let i = 0; i < name.length; i++)
{
    if(name[i] === 'Raymond')
    {
        console.log(`${name[i]} is my father`);
    } 
    else if (name[i] === 'Linda') 
    {
        console.log(`${name[i]} is my Mother`);
          
    } 
    else 
    {
        console.log(name[i]);
    }
}