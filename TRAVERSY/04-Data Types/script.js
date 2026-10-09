// Values are stored on stack
const name = 'Axl';
const age = 30;

// Reference are stored in heap

const person =
{
    name: 'Axl', age: 20

};

let newName = name;
newName = 'Rose';

let newPerson = person
newPerson.name = 'Marayag'


console.log(name, newName);
console.log(person, newPerson);