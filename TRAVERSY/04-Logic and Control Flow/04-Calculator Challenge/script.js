function calculator(num1, num2, operator)
{
    switch (operator)
    {
        case '+':
          return num1 + num2; 
          break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
        default:
            console.log('No operator indicated');
    }
}

calculator(10, 5, '+')