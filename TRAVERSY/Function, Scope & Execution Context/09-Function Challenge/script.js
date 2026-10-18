// Challenge 1
const getCelcius = (value) => `The Temperature is ${(0.56 * (value - 32)).toPrecision(4)}\xB0C`;

console.log(getCelcius(122));

// Challenge 2

const minMax = (numbers) => {
    let x = Math.min(...numbers);
    let y = Math.max(...numbers);

    return {
        min: x,
        max: y
    }
};

console.log(minMax([4,6,2,10,6,1,14]));

//Challenge 3
((length, width) =>
{
    const result = length * width;
    console.log( `The area of a rectangle with a length of ${length} and a width of ${width} is ${result}`);
})(5, 10);
