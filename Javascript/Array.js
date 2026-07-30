//Array ==> is a data structure used to stored multiple values in a single variable

let name = ["Meenu", "Gowtham", "Tufale"] //literal way

let names = new Array("Bala", "Meena", "Muthu", "Banu") //constructor way

console.log(names)
console.log(name)

let arr = [] //Empty Array

console.log(arr)

let a;

console.log(a)

//Acccess Array Elements
console.log(name[1])
console.log(names[0])

let fruits = ["Apple", "Orange", "Mango"]

//Modify Array Elements

console.log(fruits[1])

fruits[1] = "Banana"

console.log(fruits)

//Array Important Property ==> length ==> to find the count of elements in the Array

console.log(fruits.length)
console.log(names.length)

//Add Element into an Array
 
fruits.push("Orange") //Add the Element at the end

fruits.push("Grapes")

fruits.unshift("Guva") //Add the Element at the beginning

fruits.unshift("Cherry")

console.log(fruits)

//Remove Elements from an Array

fruits.pop() //Removes the elements at the end

fruits.shift() //Remove the first elements

console.log(fruits)

let arr1 = ["Meenu", 1, true, undefined, null] //tuple

let numbers = [1, 2, 3, 4, 5]

numbers.push("Six")

console.log(numbers)

//Splice() ==> this method is used to add, remove, modyfying the elements. It modifies the original Array

let cart = ["Mobile", "Labtop", "Watch", "Sarees"]

cart.splice(1, 0)

//1 --> start Index
//2 --> How many elements need to remove


console.log(cart)

cart.splice(1, 2, "Book", "Shoe")

console.log(cart)

cart.splice(1, 0, "Ring", "Jeans") //Add Elements from start Index

console.log(cart)

cart.splice(1) //Remove all Elements from start Index

console.log(cart)

//Slice() method used to extract a portion of an array and return a new array (without modfying the original array)
//slice() starts exactly from the index you give. It will not automatically include previous indexes.
let users = ["Raghu", "Ram", "Ratha", "Ramya"]

let newUsers = users.slice(1, 3)

//1 - Start Index (Inculde)
//3 - End Index  (Exclude)

console.log(users)

console.log(newUsers)

//let updateUser = users.slice(1)

let updateUser = users.slice(-2)  //Negative indexes count from end

console.log(updateUser)

let text = "Javascript"

console.log(text.slice(0, 4))

console.log(text.slice(4))


//slice()
//new Array return
//original array not changed
//extraction purpose


//splice()
// modifying the Original Array
//original array changed
//add, remove, update 

let arry1 = [1, 2, 3, 4, 5, 6]

let arry2 = arry1.slice(2) 

console.log(arry1)
console.log(arry2)

arry2.push(7)

console.log(arry1)
console.log(arry2)

console.log(arry1.concat(arry2))

let courses = ["Java", "JS", ".Net", "C", "C++", "Java"]
console.log(courses.join("-"))

console.log(courses.includes("Java"))

console.log(courses.indexOf("C"))

console.log(courses.indexOf("Java"))

console.log(courses.lastIndexOf("Java"))

//find()

let num1 = [1, 2, 3, 4, 5]

let num2 = num1.find(x=>x>3) //Returns the first matching element

console.log(num2) //4

let num3 = num1.filter(x=>x>3) //Return all the matching elements fro the Array

console.log(num3)

let num4 = num1.map(n=>n*2) //Transform each elements in the Array

console.log(num4)

let num5 = num1.reduce((acc, curr)=>acc+curr,0)

console.log(num5)

let numberList = [15, 8, 22, 10]

let max = numberList.reduce((acc, curr)=>{
    return (curr > acc) ? curr: acc
})

console.log(max)

//calculate the sum of array elements

//Destructing

let colors = ["Red", "Blue", "Green"]

//console.log(colors[0])

// let first = colors[0]
// console.log(first)

// let second = colors[1]
// console.log(second)

let[first, second, third, forth] = colors

console.log(first)
console.log(second)
console.log(third)
console.log(forth)

let newNumbers = [10, 20, 30, 40]

let[p, , r] = newNumbers

console.log(p)
console.log(r)

let[one, two, ...rest] = newNumbers  //rest operator

console.log(one) //10
console.log(rest)



let x1 = [1, 2, 3]

let x2 = [...x1, 4, 5] //Spread Operator

console.log(x2)

let x3 = [...x1, ...x2] //Merge Arrays

console.log(x3)

let y1 = [20, 30]

let y2 = [10, ...y1, 40]

console.log(y2)


let sports = ["Cricket", "Football", "Volley Ball", "Basket Ball", "Tennis"]

// console.log(sports[0])
// console.log(sports[1])
// console.log(sports[2])
// console.log(sports[3])
// console.log(sports[4])

for(let i = 0; i<sports.length; i++)
{
    console.log(sports[i])
}

//for...of

for(let s of sports)
{
    console.log(s)
}


let evenNumbers = [2, 4, 5, 6, 8, 10]

for(let e of evenNumbers)
{
    console.log(e)
}


