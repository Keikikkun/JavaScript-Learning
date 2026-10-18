const age = 19;

// Using an if statement

if (age >= 18) {
    console.log('You can vote');
} else {
    console.log('You cannot vote');
}

age >= 18 ?console.log('You can vote') : console.log('You cannot vote');

// Assigning a conditional value to a variable

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote' : 'You cannot vote';

console.log(canVote); // true
console.log(canVote2); // 'You can vote'

// Multiple Statement

const auth = true;

// let redirect;

//if (auth){
//    alert ('Welcome to the dashboard');
//    redirect = '/dashboard'
// } else {
//    alert('Access Denied');
//    redirect = '/login';
// }

console.log(redirect);

// const redirect = auth 
// ? (alert('Welcome to Dashboard'), (redirect = '/dashboard')) 
// : (alert('Access Denied'), redirect = '/login'); 

// When you don't want a else statement
// auth ? console.log('Welcome to Dashboard') : null;

// Alternative
auth && console.log('Welcome to Dashboard');
