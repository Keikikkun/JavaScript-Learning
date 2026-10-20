// For in is good for finding the key and the values of an object or array

const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'green',
    color4: 'brown',
};

for (const key in colorObj) {
    console.log(key, colorObj[key]);
}

// Looping through array

const colorArr = ['red', 'blue', 'green', 'black'];

for (const color in colorArr){
    console.log(colorArr[color]);
}