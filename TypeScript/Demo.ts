//TypeScript = JavaScript + TypeSafety
//TypeScript is converted (compiled) into JavaScript (Because TypeScrpit cannot understand the browser)

let name1 = "Muthu"

let price1 = 120

price1 = "Hundred"

let price2: number = 100

price2 = "Fifty"

console.log(price2)

console.log(price1)

//Compile Time Error handled by Typescript

//Run Time Time Error handled by Javascript 

// //name1 = true

// let age1 = 20

// //Variable Declaration

// let ename: string = "Bala"

// let newAge: number = 25

// let isActive: boolean = true

// let population: BigInt = 67867678687676978n

// //Datatype
// /*
// string
// number
// boolean
// undefined
// null
// BigInt
// Symbol */

// //Opertors
// /*
// Arithmetic
// Assignment
// Comparision
// Logical
// Unary
// Ternary
// String
// typeOf */
// let i: number
// for(i= 1; i<=5; i++)
// {
//     console.log(i)
// }

// //let fruits = ["Apple", "Orange", "Mango", 100, true] 

// let fruits: string[] = ["Apple", "Orange", "Mango"]

// let price: number[] = [100, 200, 300]

// price.push(400)
// price.pop()
// price.shift()

// console.log(fruits)

// for(let f of fruits)
// {
//     console.log(f)
// }
// //Object
// let user =
// {
//     name: "Bala",
//     age: 25
// }

// //user.age = "Twenty Five"

// let admin: {
//     name: string
//     age: number
// } = {
//     name: "Banu",
//     age: 25
// }

function add(a:number, b:number)
{
    console.log(a+b)
}

add(10, "ten")


class Student
{
    name: string
    id: number
    constructor(name: string, id: number)
    {
        this.name = name
        this.id = id
    }
    display()
    {
        console.log("Student Name: " + this.name)
        console.log("Student ID: " + this.id)
    }
}

let s1 = new Student("Bala", "101")
s1.display()

//Abstraction
//Hiding the internal implementation details and showing only the necessary functionality to the user

//Abstraction achieved in two way
//1. Abstract class
//2. Interface

//Abstract Class 
/*
abstract class Animal
{
    abstract sound(): void;          //abstract method //unimplemented

    sleep()                          //Normal or Concrete Method
    {
        console.log("Sleeping")
    }
    
}
class Dog extends Animal
{ 
    sound(): void {
        console.log("Barking")
    }
}

class Cat extends Animal
{
    sound(): void {
        console.log("Barking Loudly")
    }
}

let a;

a = new Dog()
a.sound()

a = new Cat()
a.sound()
a.sleep()

interface Animals
{
    sound(): void   //unimplemented Method

    eat(): void
}

class Dogs implements Animals
{
    sound(): void {
        console.log("Barking")
    }
    eat(): void {
        console.log("Milk")
    }
}
class Cats implements Animals
{
    sound(): void {
        console.log("Meow")
    }
    eat(): void{
        console.log("Biscuit")
    }
}

let b;

b = new Dogs()
b.sound()
b.eat()

b = new Cats()
b.sound()
b.eat()

interface Employee
{
    readonly id:number //Readonly properities
    name: string
    salary: number
    city?: string //Optional Properties

    display(): void
}

let emp:Employee = {
    id: 101,
    name: "Bala",
    salary: 10000,
    

    display()
    {
        console.log(this.id)
        console.log(this.name)
        console.log(this.salary)
        //console.log(this.city)
    }
}

//emp.id = 105

interface Books
{
    id: number;
    Bookname: string
}

let book: Books[] = [
{
    id: 101,
    Bookname: "Harry Porter"
},
{
    id: 102,
    Bookname: "Lor of Rings"
},
{
    id: 103,
    Bookname: "Wings of Fire"
}
]

interface Person1
{
    name: string;
    age: number;
}

interface Student1 extends Person1
{
    rollNo: number;
    standard: number
}

let stud: Student1 = {
    
    name: "Harini",
    age: 15,
    rollNo: 101,
    standard: 10
}
  */
//Multiple Inheritance

interface PaymentDetails
{
    amount: number
    paymentMethod: string

    makePayment(): void
}

interface Notification1
{
    sendNotfication(): void  
}

class MyOnline implements PaymentDetails, Notification1
{
    amount: number;
    paymentMethod: string

    constructor(amount:number, paymentMethod: string)
    {
        this.amount = amount
        this.paymentMethod = paymentMethod
    }

    makePayment(): void {
        console.log("Payment Processing")
        console.log("Amount: " , this.amount)
        console.log("Payment Method", this.paymentMethod)
    }
    
    sendNotfication(): void {
        console.log("Payment Successful")
        console.log("Notification sent Customer")
    }

}

let myOn = new MyOnline(10000, "GPAY")
myOn.makePayment()
myOn.sendNotfication()



// class A
// {
//     a()
//     {
        
//     }
// }
// class B
// {
//     b()
//     {

//     }
// }
// class C extends A, B
// {
   
// }


// interface Customer2
// {
//     name: string
//     age: number
// }
// interface Employee2
// {
//     name: string
//     salary: number
// }

// interface Manager extends Customer2, Employee2
// {
//     department: string
// }

// let manager1: Manager =
// {
//     name: "Bala",
//     age: 27,
//     salary: 89899,
//     department: "IT"
// }


interface Customer2
{
    name: string
    age: number
}
interface Employee2
{
    name: string
    salary: number
}

class Manager implements Customer2, Employee2
{
    name: string
    age: number
    salary: number
    
    constructor(name: string, age: number, salary: number)
    {
        this.name = name
        this.age = age
        this.salary = salary
    }
    displayDetails()
    {
        console.log("Name: " , this.name)
        console.log("Age: " , this.age)
        console.log("Salary: " , this.salary)
    }
}

let manager = new Manager("Bala", 33, 45000)
manager.displayDetails()

//Access Specifier
//1. Public
//2. Private
//3. Protected

export class Employee3
{
    public emp3name: string = "Bala"
    protected age3: number = 25
    private id: number = 1001

    private display(): void
    {
        console.log(this.emp3name)       //same class
        console.log(this.age3)           //same class
        console.log(this.id)
    }
}

class Staff3 extends Employee3
{
    displayNew(): void {
        super.display()
        console.log(this.emp3name)           //sub class
        console.log(this.age3)               //sub class
        console.log(this.id)
    }

}

// let emp1 = new Employee3()
// emp1.display()

// let emp2 = new Staff3()
// emp2.displayNew()

/*
        
            same class            subclass           outside class
private        yes                   no                   no
protected      yes                   Yes                  no
public         yes                   yes                  yes

*/

let newValue: string | number | boolean        //Union Operator

newValue = "Bala"
newValue = 10
newValue = true

