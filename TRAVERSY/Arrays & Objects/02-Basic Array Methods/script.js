const arr = [34, 55, 95, 20, 15];
let x;

// Manipulate the array

arr.push(100); // [34, 55, 95, 20, 15, 100]
arr.pop(); // Removes the last array element

arr.unshift(99); // adds the value on the 0 element of the array
arr.shift(); // removes the value at the 0 element of the array

//arr.reverse(); // Reverses the array

// Gets a value froma an array 

x = arr.includes(20); // True

x = arr.indexOf(15); // 0;

//x = arr.slice(1, 4); // Slices the elements into the array

//x = arr.splice(1, 4); // Takes the assigned value out of the array and inserts it into the variable

x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(arr);
console.log(x);
