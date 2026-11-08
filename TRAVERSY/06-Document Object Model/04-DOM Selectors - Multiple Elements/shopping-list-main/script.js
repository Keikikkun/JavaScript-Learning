// querySelectorALL()

const listItems = document.querySelectorAll('.item')
console.log(listItems);

// Selecting 1 item
// listItems[1].style.color = 'red'

// // Selecting all 
// listItems.forEach((item, index) => {
//     item.style.color = 'red';

//     if(index === 1) {
//         item.style.color = 'blue'
//     }
//     if (index === 0) {
//         item.innerHTML = `Orange
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`
//     }
// });


// Using getELementByClassname
const listItems2 = document.getElementsByClassName('item')
console.log(listItems2);

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach(item => {
    console.log(item.innerText);
});

// GetElementsByTagname
const listItems3 = document.getElementsByTagName('li');
console.log(listItems3);