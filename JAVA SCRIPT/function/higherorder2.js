function evenorodd(request)
{
    if(request=="odd")
    {
        let odd=function(n)
        {
            console.log(n%2!=0);
        }
        return odd;
    }
    if(request=="even")
    {
        let even=function(n)
        {
            console.log(n%2==0);
        }
        return even;
    }
}