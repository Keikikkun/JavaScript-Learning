const d = new Date(2026, 1, 16, 17, 0, 0)
const month = d.getMonth();
const hour = d.getHours();
console.log(d);

switch (month)
{
    case 0:
        console.log('it is January');
        break;
    case 1:
        console.log('it is February');
        break;
    case 2:
        console.log('it is March');
        break;
    default:
        console.log("It is not January, February or March");
    
}

switch (true) 
{
    case hour < 12:
        console.log('Good Morning');
        break;
    case hour >= 12 || hour <= 17:
        console.log('Good Afternoon');
        break;
    default:
    console.log('Good night');

}