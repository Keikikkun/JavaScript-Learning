const library = [
    {
        title: 'Alamat ng saging',
        author: 'David Ho',
        status: {
            own: true,
            read: false,
            reading: false,
        },
    }, 

    {
        title: 'Alamat ng Bato',
        author: 'Adik Ho',
        status: {
            own: true,
            read: false,
            reading: false,
        },
    },

    {
        title: 'Lala mo Baby',
        author: 'Axl Marayag',
        status: {
            own: true,
            read: false,
            reading: false,
        },
    }
];

let x;

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const [{title: firstBook}] = library;

x = library;

console.log(x);
console.log(firstBook)

const str = JSON.stringify(library);

console.log(str);
