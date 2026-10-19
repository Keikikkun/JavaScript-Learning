let x;

const todo = {};

todo = 1;
todo.name = 'Buy milk';
todo.completed = false;
x = todo;

// Nesting

const person =
{
    address: {
        coords: 
        {
            lat: 42.9024,
            lng: -43.24523
        }
    }
}

x = person.address.coords.lat;

const obj1 = {a:1, b: 2};
const obj2 = {c: 3, d: 4};

const obj3 = {...obj1, ...obj2}; // Use the spread operator '...' to join the two object
const obj4 = Object.assign({}, obj1, obj2) 

const todos = [{
    id: 1, name: 'buy milk',
    id: 2, name: 'pickup kids from school',
    id: 3, name: 'take out trash',
}]

x = todos[0].name // 'buy milk'

x = Object.keys(todo);

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty(name); // True

console.log(x);