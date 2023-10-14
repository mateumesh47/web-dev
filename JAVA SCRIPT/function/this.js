const student=
{
    name:"Umesh",
    dmgt:15,
    oop:14,
    fla:15,
    coa:15,
    getavg()
    {
        let avg=(this.coa+this.dmgt+this.fla+this.oop)/2;
        console.log(`${this.name} got avg marks=${avg}`);
    }
}

student.getavg();