function printgreet(func,n)
{
    for(let i=1;i<=n;i++)
    {
        func();
    }
}

let greet=function()
{
    console.log("Hellow");
}

printgreet(greet,10);