function add(a, b)
{
    console.log(a+b)
}

add(8, 8)

let sum = (a, b)=>console.log(a+b)

sum(8, 8)

//Arrow function is a short way to write  a function.

let sub = (a, b)=>console.log(a-b)

sub(8,5)

let greet = name=>console.log(name)
greet("Bala")

let square = x => x*x

console.log(square(5))



let greetings = () => console.log("Hello") //No Parameter 

let multiply = (a, b) =>
{
    return a*b
}

//callback
setTimeout(function()
{

})

setTimeout(()=>
{
    
})

let numbers = [1, 2, 3, 4]

numbers.forEach(num=>console.log(num))