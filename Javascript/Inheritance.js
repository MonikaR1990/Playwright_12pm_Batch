//Inheritance
//1. Single Inheritance
//2. Multilevel Inheritance
//3. Heirarchical Inheritance
//4. Hybrid Inheritance

class Animal               //Parent Class, Super Class, Base Class
{
    eat()
    {
        console.log("Eating")
    }
    sleep()
    {
        console.log("Sleeping")
    }
}

class Dog extends Animal    //Child Class, derived class
{
    bark()
    {
        console.log("Barking")
    }
}

class Puppy extends Dog
{
    play()
    {
        console.log("Playing")
    }
}

let d1 = new Dog()
d1.sleep()
d1.eat()
d1.bark()

//one class that aquires the properties and methods from another using extends keyword.
//code resuability 

let p = new Puppy()
p.eat()
p.sleep()
p.bark()
p.play()


class Animals   //Parent
{
    eat()
    {
        console.log("Eating")
    }
    sleep()
    {
        console.log("Sleeping")
    }
}

class Dogs extends Animals
{
    bark()
    {
        console.log("Barking")
    }
}

class Cats extends Animals
{
    meow()
    {
        console.log("Meow")
    }
}

class Lion extends Animals
{
    roar()
    {
        console.log("Roaring")
    }
}

class Puppys extends Dog
{
    play()
    {
        console.log("Playing")
    }
}


class Phone 
{
    call()
    {
        console.log("Making Calls")
    }
    sms()
    {
        console.log("Send Messages")
    }
}

class SmartPhone extends Phone
{
    internet()
    {
        console.log("Browsing Internet")
    }
    camera()
    {
        console.log("Taking Picture")
    }
}

class AndroidPhone extends SmartPhone
{
    platStore()
    {
        console.log("Downloading Apps")
    }
    googleAssitance()
    {
        console.log("Using Google Assistance")
    }
}

class Employee
{
    constructor(name, id)
    {
        this.name = name
        this.id = id
    }
    display()
    {
        console.log(this.name)
        console.log(this.id)
    }
}

class Manager extends Employee
{
    constructor(name, id, department)
    {
        super(name, id)    //calls the parent class constructor
        this.department = department
    }

    displayDetails()
    {
        super.display()
        console.log(this.department)
    }
}



let manager1 = new Manager("Deepa", 101, "HR")
manager1.displayDetails()



// let emp1 = new Employee("Meena", 100)
// emp1.display()

//this --> it refers the current class's (Employee) Object
//super --> used to access the parent class constructor and methods 
