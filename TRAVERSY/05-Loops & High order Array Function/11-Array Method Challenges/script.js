const people = [
    {
        firstName: 'Axl',
        lastName: 'Marayag',
        email: 'marayag241@gmail.com',
        phone: '0965-479-4899',
        age: 22,
    },
    {
        firstName: 'Raymond',
        lastName: 'Marayag',
        email: 'Rmarayag@gmail.com',
        phone: '0917-344-3424',
        age: 46,
    },
    {
        firstName: 'Linda',
        lastName: 'Marayag',
        email: 'Lmarayag241@gmail.com',
        phone: '0965-479-4899',
        age: 46,
    },
    {
        firstName: 'Tanya',
        lastName: 'Pasoquin',
        email: 'tanya@gmail.com',
        phone: '0917-858-4358',
        age: 22,
    },
    {
        firstName: 'Karylle',
        lastName: 'Alvaro',
        email: 'karylle@gmail.com',
        phone: '0917-423-3728',
        age: 22,
    },
]

const youngPeople = people.filter((person) => person.age <= 25).map((person) => {
    return {
        name:person.firstName + ' ' + person.lastName,
        email:person.email,
    }
});

console.log(youngPeople);

// Challenge 2

const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers.filter((positive) => positive >= 0).reduce((acc, positive) =>
    acc + positive, 0);

console.log(positiveSum);

// Challenge 3

const words = ['coder', 'programmer', 'developer'];

const capitalizeWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)   
});

console.log(capitalizeWords);
