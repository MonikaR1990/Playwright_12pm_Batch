// //Callback

// function greet(callback)
// {
//     console.log("Hello")
//     callback()
// }

// function sayHi()
// {
//     console.log("Hi")
// }

//greet(sayHi)

//Callback is a function that is passed as an agrgument to another function and is executed later after some task is completed

// function orderFood(callback)
// {
//     console.log("Preparing Food")

//     setTimeout(()=>{
//         console.log("Food is Ready")
//         callback()
//     }, 5000)
// }


// function deliveryPickup()
// {
//     console.log("Delivery Patner Pickup your order")
// }


// orderFood(deliveryPickup)

// function login(callback)
// {
//     console.log("Check Username and Password")

//     setTimeout(()=>{
//         console.log("Login Successful")
//         callback()
//     }, 3000)
// }

// function loadProfile()
// {
//     console.log("Profile Loaded")
// }

// login(loadProfile)

//callback hell problem

function login(callback)
{
    console.log("1. Login Successful")

    setTimeout(()=>{
        callback()
    }, 2000)
}

function getProfile(callback)
{
    console.log("2. Profile Loaded")

    setTimeout(() => {
        callback()
    }, 2000);
    
}

function getOrder(callback)
{
    console.log("3. Order Received")

    setTimeout(() => {
        callback()
    }, 2000);
}



function makePayment(callback)
{
    console.log("4. Payment Successful")

    setTimeout(()=>{
        callback()
    }, 2000)
}


//callback hell

login(()=>{
    getProfile(()=>{
        getOrder(()=>{
            makePayment(()=>{
                console.log("5. Process Completed")
            })
        })
    })
})

