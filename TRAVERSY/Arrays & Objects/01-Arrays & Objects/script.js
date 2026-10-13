let x; 
 
 // Array Literal
 
 const number = [12, 24, 21, 53, 42];

 // Array Constructors

 const fruits = new Array['apple', 'grape', 'orange'];

 x = number[0]; // 12

 x = number[0] + number[3]; //65  '12 + 53'

 x = `my favourite fruit is an ${fruits[1]}`;

 x = number.length; // 5
 
 fruits[2] = 'pear'; // Changes the orange to pear

 fruits[fruits.length] = 'strawberry'; // Adds a new fruit named strawberry

 console.log(x);