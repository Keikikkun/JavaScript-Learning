
const itemInput = document.querySelector('body');

itemInput.addEventListener('keydown', (e) => {
    const insert = document.getElementById('insert')

    insert.innerHTML = '';

    const keyValues = {
        'e.key': e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code
    }

    for (const key in keyValues) {
        const container = document.createElement('div');
        const div = document.createElement('div')
        const small = document.createElement('small')

        container.className = 'key'
        small.className = 'small'

        const name = document.createTextNode(key);
        const value = document.createTextNode(keyValues[key]);

        div.appendChild(value);
        small.appendChild(name);

        container.appendChild(div);
        container.appendChild(small);
        insert.appendChild(container);
    }  
;})