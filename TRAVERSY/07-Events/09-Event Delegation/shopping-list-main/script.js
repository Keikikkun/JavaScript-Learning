const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul')

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.remove();
  };
})


// listItems.forEach(item => {
//   item.addEventListener('click', (e) => {
//     e.target.remove();
//   })
// })