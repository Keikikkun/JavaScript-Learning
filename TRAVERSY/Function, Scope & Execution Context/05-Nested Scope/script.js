function first()
{
    const x = 100;

    function second()
    {
        const y = 100;
        console.log(x + y)
    }

    second()
}

// You can Access parent variable but not child variables

first() // 200 


if(true)
{
    const x = 100;

    if (x = 100)
    {
        const y = 200;
        console.log(x + y);
    }

    // console.log(y); // Error
}

