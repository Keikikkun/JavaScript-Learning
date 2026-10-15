let x;
const person = 
{
    name: 'Axl Marayag',
    age: 22,
    isAdmin: true,
    address: {
        barangay: 'Dammang West',
        cityMunicipality: 'Echague',
        province: 'Echague'
    },
    hobbies: ['music', 'sports'],

}

x = person.name; // dot syntax
x = person['age'];

x = person.address.barangay;
x = person.hobbies;

person['isAdmin'] = false;

delete person.age;

person.hasChildren = false;

person.greet = function() {
    console.log(`hello, my name is ${this.name}`); // Access key using 'this' keyword 
}

x = person.greet();



console.log(x);