function login()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("1. Login Successful")
            resolve()
        }, 2000)
    })
}
function searchTrain()
{
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("2. Train Found")
            resolve()
        }, 2000);
    })
}
function selectSeat()
{
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("3. Seat Selected")
            resolve()
        }, 2000);
    })
}
function pay()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("4. Payment Successfull")
            resolve()
        }, 2000)
    })
}
function getTicket()
{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("5. Ticket Downloaded")
            resolve()
        }, 2000)
    })
}


//Promise handle using then() and catch()

// login()
//     .then(()=>searchTrain())
//     .then(()=>selectSeat())
//     .then(()=>pay())
//     .then(()=>getTicket())
//     .then(()=>{
//         console.log("Train Booking completed")
//     })
//     .catch((error)=>{
//         console.log("Booking Failed", error)
//     })

//Async and Await are used to handle Asychronus Process or Promise (looking like normal)

async function bookTrainTicket()
{
    await login()
    await searchTrain()
    await selectSeat()
    await pay()
    await getTicket()

    console.log("Train Booking Completed")
}

//bookTrainTicket()

//async ==> a function that contains asynchronus process
async function name() {
    await promiseFunction()
}

//async function return a Promise
//await 

function getData()
{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Data Received")
        }, 2000)
    })
}

async function test()
{
    const result =  await getData()
    console.log(result)
}
//test()


async function getUsers() {
    const responce = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await responce.json()
    console.log(users)
}
//getUsers()

function login(username, password)
{   
    return new Promise((resolve, reject)=>{
        if(username === "Admin" && password === "Admin@123")
        {
            resolve("Login Successful")
        }
        else
        {
            reject("Login Failed")
        }
    })
}

async function checkLogin() 
{
    try
    {
    const result = await login("Admin", "Admin@1234545435")
    console.log(result)
    }
    catch(error)
    {
        console.log(error)
    }
}

checkLogin() 