
console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);

// Get Attribute

console.log(document.getElementById('app-title').getAttribute('id'));

// Set Attribute

document.getElementById('app-title').title = 'Shopping List';

// Syntax: setAttribute('Element', 'Element name')
document.getElementById('app-title').setAttribute('class', 'title') // Sets the class to be 'title

// Put it inside a variable
const title = document.getElementById('app-title')
console.log(title);

// Get / Change content
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>';

// Change style

title.style.color = 'red';
title.style.backgroundColor = 'black'
title.style.padding = '10px'
title.style.borderRadius = '10px'

// document.querySelector()

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"'));

console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Pillows';
secondItem.style.color = 'blue';

console.log(document.querySelectorAll('button'))

// Use methods on other elements other than document
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'yellow'
