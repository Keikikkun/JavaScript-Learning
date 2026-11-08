const form = document.querySelector('#item-form')
const input = document.querySelector('#item-input')
const clearBtn = document.querySelector('#clear');
const ul = document.querySelector('ul');
const filterSearch = document.querySelector('.form-input-filter');
const filterSelect = document.querySelector('.filter-alphabet')

const itemsList = [];

// Save Items using JSON
function saveItems () {
  localStorage.setItem('items', JSON.stringify(itemsList))
}

// Load Items
function loadItems() {
  const saveItems = JSON.parse(localStorage.getItem('items')) || [];

  saveItems.forEach(item => {
    createNewItem(item);
    itemsList.push(item);
  })
}

function createNewItem (item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red')
  li.appendChild(button);
  
  ul.appendChild(li);
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;

  const icon = createIcon('fa-solid fa-xmark')
  button.appendChild(icon)
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

function clear() {
    ul.innerHTML = '';
    itemsList.length = 0;

    saveItems();
}

loadItems();

// Filter
filterSearch.addEventListener('input', (e) => {
    const character  = e.target.value.toLowerCase();

    const items = ul.querySelectorAll('li');

    items.forEach((item) => {
      const itemName = item.textContent.toLowerCase();

      if (itemName.includes(character)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
});

const originaList = Array.from(ul.querySelectorAll('li'))

filterSelect.addEventListener('input', (e) => {
  
  const list = Array.from(ul.querySelectorAll('li'))
  const value = e.target.value

    if (value === '1') {
      list.sort((a, b) => a.textContent.localeCompare(b.textContent))
      list.forEach(item => ul.appendChild(item))
    } else if (value === '2') {
      list.sort((a, b) => b.textContent.localeCompare(a.textContent))
      list.forEach(item => ul.appendChild(item))
    } else {
      originaList.forEach(item => ul.appendChild(item));
    }
});

// Remove Item
ul.addEventListener('click', (e) => {
  
  if (e.target.tagName === "I")
  {
      const li = e.target.closest('li');
      const itemName = li.textContent.trim();

      const index = itemsList.findIndex(item => item.toLowerCase() === itemName.toLowerCase());

      if (index !== -1) {
        itemsList.splice(index, 1)
    }

    li.remove();
    saveItems();
  }
});

// Get item input
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const item = input.value.toLowerCase();
  if (item === '') {
    alert('Please Enter an Item')
    return;
  }

  const capitalizedItem = item.charAt(0).toUpperCase() + item.slice(1);
  const items = Array.from(ul.querySelectorAll('li'))

  let exist = items.some(item => item.textContent.trim().toLowerCase() === capitalizedItem.toLowerCase());

  if (exist) {
    alert('Item Already Exist')
    input.value = '';
  } else {
    createNewItem(capitalizedItem);
    itemsList.push(capitalizedItem);
    input.value = '';
    console.log(itemsList);
    saveItems()
  }
});

// Clear
clearBtn.addEventListener('click', clear);