// filter() method creates a shallow copy of a portion of a given array
// filtered down to just the elements from the given array

const numbers = [1,2,3,4,5,6,7,8,9,10];

const evenNumber = numbers.filter(number => number % 2 === 0)

console.log(evenNumber);

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

// Get only Retail Companies
const retailCompanies = companies.filter(retail => retail.category === 'Retail')

console.log(retailCompanies);

// Companies that started in or after 1980 and ended in or before 2005

const yearCompany = companies.filter(company => company.start >= 1980 && company.end <= 2005);

console.log(yearCompany);

// Companies that lasted 10 yrs or more

const decadeCompany = companies.filter(company => company.end - company.start >= 10
);

console.log(decadeCompany);