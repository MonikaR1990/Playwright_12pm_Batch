import {add, greet} from '../Javascript/Modules.js'
import { schoolName } from '../Javascript/Modules.js'
import Person  from '../Javascript/Modules.js'
import {Student as stud} from '../Javascript/Modules.js' //Alias

// import Employee, * as Modules from "../Javascript/Modules.js";

//import Employee from '../Javascript/Modules.js'


add(5, 7)
greet("Bala")

console.log(schoolName)

let p = new Person("Mani")
p.display()

let s = new stud()
s.displayStudent()
