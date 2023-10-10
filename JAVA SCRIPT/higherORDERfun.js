function add(a,b,c)
{
    let result=a+b;
    c(result);
}

function showresult(result)
{
    console.log(result);
}

add (2,3,showresult)