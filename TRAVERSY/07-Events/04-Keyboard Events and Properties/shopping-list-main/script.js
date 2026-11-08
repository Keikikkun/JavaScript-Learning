const itemInput = document.getElementById('item-input');

const onKeyPress = () => {
  console.log('Key-Press');
}

const onKeyUp = () => {
  console.log('Key-Press-Up');
}
const onKeyDown = (e) => {
  // key
  console.log(e.key);

  // keoCode
  console.log(e.keyCode);

  // code
  console.log(e.code);
}

itemInput.addEventListener('keypress', onKeyPress)
itemInput.addEventListener('keyup', onKeyUp)
itemInput.addEventListener('keydown', onKeyDown)
