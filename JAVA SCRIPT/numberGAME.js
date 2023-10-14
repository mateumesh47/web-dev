let num=prompt("Enter max number");
//console.log(num);

const random=Math.floor(Math.random()*num) +1;
//console.log(random);

let guess=prompt("Guess the number");

while(true)
{
    if(guess=="quit")
    {
        console.log("User quit");
        break;
    }

    if(guess==random)
    {
        console.log("You are right ! random number was",random);
        break;
    }
    else if(guess<random)
    {
        guess=prompt("Your guess was to small.Please try again");
    }
    else
    {
        guess=prompt("Your guess was to large.Please try again");
    }
}