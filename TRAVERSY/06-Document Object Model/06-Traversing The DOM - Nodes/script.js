const parent = document.querySelector('.parent')
let output;

output = parent.childNodes;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = 'Child one';
output = parent.childNodes[5].style.color = 'red';

output = parent.firstChild;
output = parent.lastChild;

parent.lastChild.textContent = 'Hello';

// Parent node

const child = document.querySelector('.child')

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// Siblings

const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;

output = secondItem.nextSibling;

console.log(output);