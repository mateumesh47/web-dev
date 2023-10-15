let arr=[
    {
        name:"umesh",
        mark:95,
    },
    {
        name:"sahil",
        mark:96,
    },
    {
        name:"janvi",
        mark:97,
    },
];

let stu=arr.map((student)=>{
    return student.mark/10;
});

console.log(stu);