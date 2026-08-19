import { Employee3 } from "./Demo.ts"

//same class

//sub class   //child class

//outside class   //other files

let newEmp = new Employee3()
console.log(newEmp.emp3name)          //outside class
console.log(newEmp.age3)            //outside class not able to access protected
console.log(newEmp.id)            //outside class not able to access private
newEmp.display()