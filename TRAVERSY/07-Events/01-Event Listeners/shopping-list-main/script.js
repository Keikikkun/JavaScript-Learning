// JavaScript event listener

const clearBtn = document.querySelector('#clear');
function clear() {
    const li = document.querySelectorAll('li')
    li.forEach(item => {
        item.remove();
    })
}

clearBtn.addEventListener('click', clear);

