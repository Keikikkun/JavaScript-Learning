const logo = document.querySelector('img');

function onClick() {
  console.log(e.target);
  console.log(e.currentTarget);
}

logo.addEventListener('click', onClick);

document.body.addEventListener('click', function (e) {
  console.log(e.target);
  console.log(e.currentTarget);
})

/*
- 'target' - THe element that trigger the event
- 'currentTarger' - The element that the event listener is attatched to
- 'type' - The type of event that was triggered
- 'timeStamp' - The time that the event was triggered
- 'clientX' - The x position of the mouse click relative to the window
- 'clientY'- The y position of the mouse click relative to the window
- 'clientZ' - The x position of the mouse click relative to the window
- 'pageX' - The x poistion of the mouse relative to the page
- 'PageY' - The y poistion of the mouse relative to the page
- 'ScreenX' - The x position of the mouse relative to the screen
- 'ScreenY' - The y position of the mouse relative to the screen
*/ 


