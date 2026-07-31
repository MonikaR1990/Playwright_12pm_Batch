//An Object is a collection *properities* and methods

let student = {
    name: "Ram",
    age: 25,
    city: "Trichy"
}

console.log(student)
//key:value pair combination

//Access the object properities

console.log(student.name)  //dot notation
console.log(student.age)

console.log(student["name"]) //Bracket notation
console.log(student["city"])

//Add new Property

student.phone = "789789798"
student.email = "ram@gmail.com"

console.log(student)

//update property 

student.age = 15

console.log(student)

//Delete Property

delete student.city

console.log(student) //CRUD


let employee = {
    name: "Bala",
    age: 25,
    salary: 25000,
    address:{                         //Nested Object
        city: "Madurai",
        state: "Tamilnadu"
    },

    showEmployeeDetails()
    {
        console.log(this.name)
        console.log(this.salary)
        console.log(this.age)
    }
}
//this keyword that refers current object (employee)

console.log(employee.name)
employee.showEmployeeDetails()
console.log(employee.address.state)


//Objects inside an Array
let person = [
    {
        name: "Mani",
        age: 22
    },
    {
        name: "Bala",
        age: 32
    },
    {
        name:"Muthu",
        age: 21
    }

]


let[
    {name: name1},
    {name: name2},
    {name: name3}
] = person

console.log(name1)
console.log(name2)
console.log(name3)

// console.log(person[1].name)
// console.log(person[2].name)
// console.log(person[2].age)

//Array insdie an Object
let techStdents = {
    name: "Banu",

    skills:["Java", "JS", "C", "C++"]

}

let {skills:[skill1, skill2, skill3, skill4]} = techStdents

console.log(skill1)

console.log(skill1)

console.log(techStdents.skills[3])

//looping

//for...in

//Key
for(let key in student)
{
    console.log(key)
}

//Value

for(let key in student)
{
    console.log(student[key])
}

let car = {
    name: "S810",
    brand: "TATA",
    color: "Red",
    price: 800000,
    hasAirCondiner: true
}


//Object.keys()

console.log(Object.keys(car))

let keys = Object.keys(car)
console.log(keys)

//Object.values()

console.log(Object.values(car))

//Object.entries

console.log(Object.entries(person))

//Destructring

console.log(car.name)

let {name, brand, color, price, hasAirCondiner} = car

console.log(name)
console.log(brand)
console.log(color)

let emp1 = {
    name: "Geena",
    age : 25
}

let emp2 = {
    ...emp1,
    city: "Trichy"
}

console.log(emp2)

let obj1 = {
    a: 10
}

let obj2 = {
    b: 20
}

let obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)

//Object.freeze

let book = {
    name: "TN Tamil Book",
    subject: "Tamil History",
    price: 150
}

//Object.freeze(book)

Object.seal(book)

book.name = "TNPSC Tamil Book"
book.authour = "Deva" //(Can't add and delete)

console.log(book)

let watch = 
{
    name: "Titan",
    price: 4000
}

//JSON
/*
{
    "name": "Titan",
    "price": 4000
}
*/


