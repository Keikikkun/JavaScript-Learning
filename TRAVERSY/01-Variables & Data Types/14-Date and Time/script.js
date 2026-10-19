let d;

d = new Date()

d = d.toString(); // Converts the object into a string
d = new Date(2021, 0, 10, 12, 30, 0) // Date in (year, Month, Day, Hour, Minutes, Seconds)

d = new Date('2021-07-10T12:30:00');
d = new Date('07/10/2021 12:30:00');
d = new Date('2022-07-10');

// Time Stamps

 
d = Date.now();

d = new Date('07-10-2022 12:30:00');
d = d.getTime();
d = d.valueOf();

d = new Date(1657427400000);

d = Math.floor(Date.now() / 1000);

console.log(d);

