// insertAdjacentElement

const { createElement } = require("react");

function insertItem () {
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('hi');
  h1.textContent = 'instertAdjacentElement';

  filter.insertAdjacentElement('beforebegin', h1);
}

// insertAdjacentText
function insertText () {
  const item = document.querySelector('li:first-child')

  item.insertAdjacentText('beforebegin', 'insertAdjacentText')
  }

// Insert Adjacent HTML
function insertHTML() {
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjucentHTML</h2>');
}

// InsertBefore Example
function insertBeforeItem () {
  const ul = document.querySelector('ul');

  const li = createElement('li');
  li.textContent = 'insertBefore'

  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li ,thirdItem);
}

insertHTML();
insertItem();
insertText();
insertBeforeItem();