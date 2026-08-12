// //Promise
// //Promise is an Object that represents the evental completion (success or failure) of an asynchronous process

// //3 States
// //1. Pending
// //2. FullFilled (Resolved)
// //3. Rejected (Failed)

// // let myPromise = new Promise((resolve, reject)=>{

// // })

// let loginPromise = new Promise((resolve, reject)=>{
    
//     let isLoginSuccess = false

//     if(isLoginSuccess)
//     {
//         resolve("Login Successfully Completed")
//     }
//     else
//     {
//         reject("Login Failed")
//     }
// })

// /* loginPromise
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error)) */

// function login(username, password)
// {   
//     return new Promise((resolve, reject)=>{
//         if(username === "Admin" && password === "Admin@123")
//         {
//             resolve("Login Successful")
//         }
//         else
//         {
//             reject("Login Failed")
//         }
//     })
// }

// /* login("Admin", "Admin@123")
//     .then(result=>console.log(result))
//     .catch(error=>console.log(error)) */


function orderPizza()
{
    return new Promise((resolve, reject)=>{
        
        console.log("Restaurant is preparing you Pizza")

        let pizzaAvailable = true

        setTimeout(()=>{
            if(pizzaAvailable)
            {
                resolve("Pizza Delivered")
            }
            else
            {
                reject("Restaurant Cancel Your Order")
            }
        }, 3000)
    })
}

/* orderPizza()
    .then(message=>console.log(message))
    .catch(error=>console.log(error))  */


function interviewProcess(candidateScore)
{
    return new Promise((resolve, reject)=>{
        
        console.log("HR: You Interview is Completed")

        console.log("HR: We will update your status within 3 days")

        setTimeout(() => {
            
            if(candidateScore>=80)
            {
                resolve({
                    status: "Selected",
                    company: "TCS",
                    role: "Software Test Engineer",
                    salary: "10 LPA"
                })
            }
            else
            {
                reject("Sorry !! Another Candidate matched our requirements better")
            }

        }, 3000);
    })
}

interviewProcess(85)
    .then(result => {
        console.log("Congratulations!!")
        console.log("Comapany Name: ", result.company)
        console.log("Role: ", result.role)
        console.log("Salary: ", result.salary)
    })
    .catch(error=>console.log(error))

