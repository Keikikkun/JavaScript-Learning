let x;

let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();

x = d.getFullYear(); // Outputs Year

x = d.getMonth(); // Outputs Month 0 based

x = d.getDate(); // Outputs day of the month

x = d.getDay(); // Output's Day of the week

x = d.getHours(); // Output Hours

x = d.getMinutes(); // Outputs Minutes

x = d.getSeconds(); // Outputs Seconds

x = `${d.getFullYear()} - ${d.getMonth() + 1} - ${d.getDate()}`;

// INTL.DateTimeFormat API for Dates

x = Intl.DateTimeFormat('default').format(d)
x = Intl.DateTimeFormat('default', {month: 'long'}).format(d); // October

x = d.toLocaleString('default', {month: "short"});

x = d.toLocaleString('default', {
 weekday: 'long',
 year: 'numeric',
 day: 'numeric',
 hour: 'numeric',
 minute: 'numeric',
 second: 'numeric',
 timeZone: 'America/New_York',
});

console.log(x);