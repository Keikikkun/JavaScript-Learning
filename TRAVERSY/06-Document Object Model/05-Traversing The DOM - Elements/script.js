
let output; 

// Get child elements 
const parent = document.querySelector('.parent');

output = parent.children;

output = parent.children[1].innerText; // Child 2
output = parent.children[1].className; // child
output = parent.children[1].nodeName; // DIV

parent.children[1].innerText = 'Child Two'
parent.children[1].style.color = 'red'

//
parent.firstElementChild.innerText = 'Child one';
parent.lastElementChild.innerText = 'Child three';

// Get parent elements fro a child

const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// Sibling Element
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem;
output = secondItem.nextElementSibling;
secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'yellow'

console.log(output);