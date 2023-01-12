
// Encapsulation

class student

{
    constructor()
    {
        let name, marks;
    }
    getName()
    {
        return this.name;
    }
    setName(name)
    {
    this.name=name;
    }
    getMark()
    {
        return this.mark;

    }
    setMarks(marks)
    {
        this.marks=marks;
    }

}

let stu=new student();

stu.setName('john');
stu.setMarks(90);

console.log(stu.setName(),stu.setMarks());

