let names=["tony","bruce","steve","peter","xyz","abc","pyq"];
let [winner,runnerup,...other]=names;
console.log(winner);
console.log(other);



//for object

const student={
    name:"kiyansh",
    age:16,
    class:10,
    subject:["marathi","english","hindi"],
    username:"kiyansh@123",
    password:"abc",
};

let {username:user ,password}=student;
/////key      variable
console.log(user);
console.log(password);