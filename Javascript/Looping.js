//Loop is used to execute a block of code repeatedly until a condition becomes false

//for loop
//while loop
//do..while loop

//print 1 to 5

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// for(let i = 1; i<=5; i++)
// {
//     console.log(i)
// }


// for(let i = 2; i<=20; i+=2)
// {
//     console.log(i)
// }
/*
let sum = 0;

for(let i = 1; i<=5; i++)
{
    sum += i  //sum = sum + i
}

console.log(sum)


let str = "Meenu"
//let reverse = str.split("").reverse().join()

let rev = "";

for(let i = str.length - 1; i>=0; i--)
{
    rev += str[i]
}


console.log(rev)
//for (Numbers of iteration is known) (array, count)

//While Loop (Number of iteration is unknown) (input)

let i = 1

while(i<=5)
{
    console.log(i)
    i++
}

for(let i = 1; i<=30; i++)
{
    console.log("Checking Attendance: " + i)
}

for(let i = 1; i<=100; i++)
{
    console.log("Sending Email to Customer " + i)
}

let n = 5

for(let i = 1; i<=10; i++)
{
    console.log(i + "X" + n + "=" + (i*n))
}

const prompt = require("prompt-sync")()

let pin;

while(pin !== "1234")  //true
{
    pin = prompt("Enter Pin")
}

console.log("Login Successfull") */

//do-while loop

let i = 6

do
{
    console.log(i)
    i++
}while(i<=5)


const prompt = require("prompt-sync")()

let pin;

do
{
    pin = prompt("Enter Pin")
}while(pin !== "1234")

console.log("Login Successful")  






