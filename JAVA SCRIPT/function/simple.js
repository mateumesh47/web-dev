function hellow()
{
    console.log("hellow");
}

hellow();  //calling 

function table(n)
{
    for(let i=1;i<=10;i++)
    {
        console.log(n*i);
    }
}

table(5);  //calling

function printname(name,surname)
{
    console.log(`Name is ${name} ${surname}.`);
}

printname("umesh","mate");