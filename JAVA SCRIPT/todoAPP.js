let todo=[]

let req=prompt("please enter your request");

while(true)
{
    if(req=="quit")
    {
        req=prompt("please enter your request");
        console.log("quitting app");
        break;
    }
    if(req=="list")
    {
       console.log("-------------------");
       for(let i=0;i<todo.length;i++)
       {
        console.log(i,todo[i]);
       }
       console.log("-------------------");
    }
    else if(req=="add")
    {
        let task=prompt("Enter your task you want to add");
        todo.push(task);
        console.log("Task added")
    }
    else if(req=="delete")
    {
        let idx=prompt("Please enter index that you want to delete");
        todo.splice(idx,1);
        console.log("task deleted");
    }
    else
    {
        console.log("incorrect requst");
    }
    req=prompt("please enter your request");
}