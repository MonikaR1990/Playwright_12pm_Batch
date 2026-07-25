//OOPS Concept

//1. Class
//2. Object
//3. Inheritance
//4. Polymorphism
//5. Abstraction 
//7. Encapsulation


//Class is a blueprint. that consists properties and methods
class Hotel
{
    tea = 15
    coffee = 20
    menu = "Pongal"
    

    display()
    {
        console.log(this.tea)
        console.log(this.coffee)
        console.log(this.menu)
    }

}

let waiter1 = new Hotel()

waiter1.display()
waiter1.tea = 17
waiter1.display()

let waiter2 = new Hotel()
waiter2.display()

waiter2.tea = 17

class Student
{
    constructor(name, id, age)
    {
        this.name = name
        this.id = id
        this.age = age
    }

    displayStudentDetails()
    {
        console.log("Name: " + this.name)
        console.log("ID: " + this.id)
        console.log("Age: " + this.age)

    }

    showdept()
    {
        console.log("ID: " + this.dept)
    }
}

let s1 = new Student("Meena", 102, 22)
s1.displayStudentDetails()



