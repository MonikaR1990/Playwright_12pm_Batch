//function or method

//A function is a resusable block of code that performs specific task


//Syntax
function functionName()
{
    //Task (or) Process
}

//Function declaration and Defination

greet() //hoisting

// console.log(a)

// let a = 10

function greet()  //function without parameter
{
    console.log("Welcome")
}

//Function Call
greet()

greet()

greet()

if(1!=2)
{
    greet()
}
else
{
    console.log("Hello")
}

let name = "Meena"

function greetings(name)      // function with parameter   
{
    console.log("Hello " + name)
}

greetings("Bala")
greetings("Meena")
greetings("Mani")


function add(a, b)
{
    console.log(a+b)
}

add(5, 5)

add(5, 5)

function sub(a, b)
{
    console.log(a-b)
}

sub(10, 5)

if(false)
{
    add(10, 10)
}
else
{
    sub(10, 6)
}

let total = add(5, 5);
console.log(total)

function sum(a, b)
{
    return a + b
}

console.log(sum(10, 30))

let totalSum = sum(5, 5) + 10;
console.log(totalSum);


//void function doesn't return any value //Only performing an action //can't be store the result in the variable
//return function returns a value //Need to send resultback //able be store the result in the variable

function calculateSalary(basic, hra, ot)
{
    let salary = basic + hra + ot
    return salary
}

calculateSalary(10000, 5000, 2000)

let updatedSalary = calculateSalary(10000, 5000, 2000) + 5000
console.log(updatedSalary)

// multiply(5, 5)

// function multiply(a, b) //you can call before it is defined
// {
//     console.log(a*b)
// }

// multiply(5, 5)

//console.log(multiply(5, 10))

let multiply = function(a, b)
{
    return a*b
}

console.log(multiply(5, 10))


function display(name)
{
    console.log(name)
}

display("Banu")