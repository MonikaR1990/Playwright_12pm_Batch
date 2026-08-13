//ES6 features 2015
//==> 1.
//let 
//const

{
    let a = 10
    //console.log(a)
}

//console.log(a)

//2==> Arrow Function

// square(5)

// function square(x)
// {
//     console.log(x*x)
// }

//console.log(square(3))

const square = x => x*x //Implicit return

// const square = x => 
//     {
//     return x*x
//     }                       //Explicit Return

// console.log(square(3))

const person = {
    name: "Bala",

    greet()
    {
        console.log(this.name)
    }
} 
//Arrow function do not have their own this

//3==> Template Literal

let name = "Bala"
let age = 25

console.log("My Name is " + name + " " + "My age is " + age)
console.log("My Name is" , name + " " , "My age is " , age)

console.log(`My name is ${name} and My age is ${age}`)

let message = `Hello Bala,
Welcome to 
JavaScript`

let a = 10
let b = 20

console.log(`Total = ${a+b}`)

console.log(message)
//${variable}

//4. Default Parameter

function greet(name="Guest")
{
    console.log(`Hello ${name}`)
}

greet() //default function
greet("Bala")

function test(value = 100)
{
    console.log(value)
}

test()
test(10000)

//5. Rest Parameter or Operator (It collects multiple parameters in to an array)

function add(...numbers)
{
    console.log(numbers)
}

add(10, 20, 30)
add(10, 20, 30, 40, 50)

//6. Spread Operator

let arr1 = [1, 2, 3]
let arr2 = [...arr1, 4, 5, 6]

console.log(arr2)

let arr3 = [...arr2, 7, 8, 9] 

console.log(arr3)

let user = {
    name: "Bala",
    age: 25
}

let updatedUser = {
    ...user,
    city: "Trichy",
    state: "Tamilnadu"
}

console.log(updatedUser)

//Rest Vs Spread
//Rest = collect
//Spread = Expand

//7. Destructing => It allows us to extract values arrays and objects

let newNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let [a1, b1, c1, ...remaining] = newNumbers

console.log(a1)
console.log(b1)
console.log(c1)
console.log(remaining)

let newUser = {
    uname: "Mani",
    uage: 75
}

let {uname, uage} = newUser

console.log(uname)
console.log(uage)

// let ename = "Muthu"
// let eage = 34

// let person1 ={
//     name: ename,
//     age: eage
// }

// console.log(person1)


let ename = "Muthu"
let eage = 34
let eid = 101

let person1 ={
    ename,
    eage,
    eid
}

console.log(person1)

//8. Classes (ES6 features class introduce)
//class
//constructor
//inheritance (extends)
//this
//super

//9. Import and Export Modules

//A module can have multiple normal exports but oly one default export

//10. Promise
//Promise is an Object that represent the eventual completion (resolve, reject) of an asynchronous process

//Pending
//fullfilled
//rejected

//11. for...of

let newValues = [10, 20, 30, 40, 50]

for(let n of newValues)
{
    console.log(n)
}

//12 for...in

let mobile = {
    brand: "Vivo",
    color: "Blue",
    price: 20000
}

for(let key in mobile)
{
    console.log(mobile[key])
}

//map
//set

//Symbol

let id = Symbol("Emp ID")

id = 101

console.log(id)


