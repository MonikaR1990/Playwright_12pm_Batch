//Control Flow
//1. Conditional Statement
//2. Iteration Statement (Looping Statemet)
//3. Jumping Statement

//1. Conditional Statement
//1. simple if
//2. if..else
//3. else..if ladder
//4. Nested if
//5. switch case

if(5>5)
{
    console.log("Hello")
}
else
{
    console.log("Bye")
}

let mark = 55

if(mark>=90 && mark<=100)
{
    console.log("A Grade")
}
else if(mark>=75 && mark<=89)
{
    console.log("B Grade")
}
else if(mark>=65 && mark<=74)
{
    console.log("C Grade")
}
else if(55>=50 && 55<=64)
{
    console.log("D Grade")
}
else if(55>=35 && mark<=49)
{
    console.log("E Grade")
}
else
{
    console.log("Fail")
}

console.log("Hi...")


let amount = 500

if(amount >= 10000)
{
    console.log("30% Discount")
}
else if(amount >= 5000)
{
    console.log("20% Discount")
}
else if(amount >= 2000)
{
    console.log("10% Discount")
}
else
{
    console.log("No Discount")
}

let age = 25
let hasVoterId = true

if(age>=18)
{
    if(hasVoterId)
    {
        console.log("Able to Vote")
    }
    else
    {
        console.log("Not Able for Vote")
    }
}
else
{
    console.log("Not Eligible For Vote")
}

let cartInserted = true
let pin = 1234

if(cartInserted)
{
    if(pin === 1234)
    {
        console.log("Withdraw Cash")
    }
    else
    {
        console.log("Invalid Pin")
    }
}
else
{
    console.log("Insert ATM Card Properly")
}

//Switch....Case

let day = 9

switch(day)
{
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid Number")   
}

console.log("Switch Over")


let num1 = 10
let num2 = 20
let op = "%"

switch(op)
{
    case "+":
        console.log(num1+num2) 
        break
    case "-":
        console.log(num1-num2)
        break
    case "*":
        console.log(num1*num2)
        break
    case "/":
        console.log(num1/num2)
        break
    default:
        console.log("Wrong Operator")
}

let color = "Red"

switch(color)
{
    case "Red":
        console.log("STOP")
        break
    case "Green":
        console.log("GO")
        break
    case "Yellow":
        console.log("READY TO GO")
        break
    default:
        console.log("Wrong Signal")
}