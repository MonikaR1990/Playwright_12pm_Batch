//Operators

//1. Arithmetic Operators (+, -, *, /, %)
//2. Assignment Operators (=, +=, -=, *=, /=)
//3. Comparision Operators (==, ===, !=, !==, <, >, <=, >=)
//4. Logical Operators ( ||, &&, !)
//5. Unary Operators ( +, - , ++, --)
//6. String Operators (+)
//7. Ternary Operators (? :)
//8. typeOf Operators 

let a = 10
let b = 20
console.log(a+b)

let c = 10

c += 5 //c = c + 5

console.log(c)

c -= 5 // c = c - 5

console.log(c)

console.log(5=="5")

console.log(5==="5")  //Strict Equal 

console.log(5!=="5") //Strict Not Equal

console.log(5>=5)

console.log((5>3) &&  (5<5) )

console.log((5==3) || (5<3))

let isPresent = true

console.log(!isPresent)

let x = +10
let y = -10

let z = 5;

console.log(z++) //6

console.log(z)

console.log(z--)

console.log(z)

console.log(--z)
console.log(++z)

let s = 5
let t = "Five"

console.log(s + t)

let age = 19
let hasVoterId = false

const result = ((age>=18) && hasVoterId) ? "Eligible For Vote" : "Not Eligible For Vote"
console.log(result)

let light = "Red"

const signal = (light === "Green") ? "Go" : "Stop"
console.log(signal)

console.log(typeof(light))
console.log(typeof(hasVoterId))
console.log(typeof(age))

console.log(!0) //falsy value
console.log(!1)
console.log(!2) //truthy value

console.log(!-5)
console.log(!0n)
console.log(!null)
console.log(!undefined)
console.log(!NaN)


//falsy value
//0
//false
//-0 (negative zero)
//0n  (BigInt Zero)
//null
//undefiend
//NaN
