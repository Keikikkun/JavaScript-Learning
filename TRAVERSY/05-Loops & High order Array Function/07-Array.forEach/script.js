const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// Normal Function
socials.forEach(function(element) {
    console.log(element);
})


// Arrow Function

socials.forEach((element, index, arr) => console.log(`${index} - ${element}`));


// Seperated the function
function logSocials(social){
    console.log(social);
}

socials.forEach(logSocials);

// Looping Through Array Object 
const socialObjs = [
    {name: 'Twitter', url: 'https://twitter.com'},
    {name: 'Facebook', url: 'https://facebook.com'},
    {name: 'Instagram', url: 'https://instagram.com'},
    {name: 'LinkedIn', url: 'https://linkedin.com'},
];

socialObjs.forEach((item) => console.log(item));