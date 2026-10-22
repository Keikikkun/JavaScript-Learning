const numbers = [1,2,3,4,5,6,7,8,9,10];

const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

// For each 
const doubledNumbers2 = [];

numbers.forEach((number) => {
    doubledNumbers2.push(number * 2);
})

const companies = [
    {name: 'company 1', category: 'Finance', start: 1981, end: 2004},
    {name: 'company 2', category: 'Retail', start: 1992, end: 2008},
    {name: 'company 3', category: 'Auto', start: 1999, end: 2007},
    {name: 'company 4', category: 'Retail', start: 1989, end: 2010},
    {name: 'company 5', category: 'Technology', start: 2009, end: 2014},
    {name: 'company 6', category: 'Finance', start: 1987, end: 2010},
    {name: 'company 7', category: 'Auto', start: 1986, end: 1996},
    {name: 'company 8', category: 'Technology', start: 2011, end: 2016},
    {name: 'company 9', category: 'Retail', start: 1981, end: 1989},
];

// Create an array of company names

const companyName = companies.map((company) => company.name)

console.log(companyName);

// Array with company and category

const companyInfo = companies.map((company) => {
  return { 
    name: company.name,
    category: company.category,
}
});
console.log(companyInfo);

// Array of the name and length of the company in years

const companyYear = companies.map((company) => {
    return {
        name: company.name,
        year: company.end - company.start + ' years',
    }
});
console.log(companyYear);

// Chain map methods
const squareAndDouble = numbers.map((number) => Math.sqrt(number)).map((sqrt) => sqrt * 2);
console.log(squareAndDouble);

// Long version


// Chaining different methods

const evenDouble = numbers.filter((number) => number % 2 === 0).map((number) => number * 2);
console.log(evenDouble);