//arrow function are nameless & not use function keyword

const sum=(a,b)=>{
    console.log(a+b);
};

sum(1,2);

let print=n=>{
    console.log(`n=${n}`);
};

print(5);

let mul=(a,b)=>(
   a*b
);

console.log(mul(5,6));