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


console.log(person[1].name)
console.log(person[2].name)
console.log(person[2].age)

//Array insdie an Object
let techStdents = {
    name: "Banu",

    skills:["Java", "JS", "C", "C++"]

}

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

