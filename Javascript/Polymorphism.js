//Poly - Many 
// morph - form

//Method Oveloading ==> Compile Time Polymorphism (No Concept in Javascript)
//Method Overriding ==> Run Time Polymorphism

// class Addition
// {
//     add(a, b)
//     {

//     }
//     add(a, b, c)
//     {

//     }
//     add(a, b, c, d)
//     {

//     }
// }

// let a1 = new Addition()
// a1.add(12, 12)
// a1.add(23,43,34)

//Method Overriding

class Animal
{
    sound()
    {
        console.log("Makes Sound")
    }

    eat()
    {
        console.log("Eating")
    }
    sleep()
    {
        console.log("Sleeping")
    }

}

class Dog extends Animal
{
    sound()
    {
        console.log("Barking")
    }
}

let d = new Dog()
d.sound()
d.eat()
d.sleep()

//A child class provides its own implementation of method inherited from parent class

class Payement
{
    processPayement()
    {
        console.log("Processing Payement")
    }
}

class CreditCard extends Payement
{
    processPayement()
    {
        console.log("Processing Payment using Credit Card")
    }
}

class UPI extends Payement
{
    processPayement()
    {
        console.log("Processing Payment using UPI")
    }
}


