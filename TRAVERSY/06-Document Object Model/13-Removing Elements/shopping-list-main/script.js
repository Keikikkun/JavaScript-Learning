function removeClrearBtn() {
  document.querySelector('#clear').remove();
}

function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');

  ul.removeChild(li);
}

function removeItem(itemNumber) {
  const ul = document.querySelector('ul');
  const li = document.querySelector(`li:nth-child(${itemNumber})`)
  ul.removeChild(li)
}

function removeItem3(itemNumber) {
  const li = document.querySelectorAll(`li`);
  li[itemNumber - 1].remove();
}

removeClrearBtn();
//removeFirstItem();
removeItem3(1);