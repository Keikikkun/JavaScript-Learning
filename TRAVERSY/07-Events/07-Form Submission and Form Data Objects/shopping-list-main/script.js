const form = document.getElementById('item-form');

function onSubmit(e) {
  e.preventDefault();

  const item = document.getElementById('item-input').value;
  const prio = document.getElementById('priority-input').value;

  if (item === '' || prio === '0') {
    alert('Please Fill in All Fields')
  }

  console.log(item, prio);
}

function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  // const item = formData.get('item');
  // const priority = formData.get('priority');

  const entries = formData.entries();
  console.log(entries);

  for (let entry of entries) {
    console.log(entry);
  }

  // console.log(item, priority);
}



form.addEventListener('submit', onSubmit2)