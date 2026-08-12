
export let schoolName = "ABC School"

console.log(schoolName)

add(6, 7)

export function add(a, b)
{
    console.log(a+b)
}

export function greet(name)
{
    console.log("Hello " + name)
}

add(6, 7)

add(6, 7)

greet("Bala")


export class Person
{
    constructor(name)
    {
        this.name = name
    }
    display()
    {
        console.log(this.name)
    }

}

export default class Employee
{
    display()
    {
        console.log("Employee")
    }
}

// export default class Student
// {
//     display()
//     {
//         console.log("Employee")
//     }
// }

export class Student
{
    displayStudent()
    {
        console.log("Student")
    }
}