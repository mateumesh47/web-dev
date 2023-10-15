let arr=[1,2,8,3,1,4,8,9,1,4,5,6,7];

let m=arr.reduce((max,el)=>{
    if(max<el){
        return el;
    }
    else{
        return max;
    }
});

console.log(m);