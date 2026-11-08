const itemInput = document.getElementById('item-input')
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
  console.log(e.target.value);
}

function onChecked(e) {
  console.log(e.target.checked);
}

function onFocus() {
  console.log('input is focused');
}

function onBlur() {
  console.log('input is not focused');
}

itemInput.addEventListener('input', onInput)
priorityInput.addEventListener('input', onInput)
checkbox.addEventListener('input', onChecked)
itemInput.addEventListener('focus', onFocus)
itemInput.addEventListener('blur', onBlur)