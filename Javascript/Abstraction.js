//Abstraction is hiding the internal implementation details and showing only necessary features (functionality) to the user

//Abstraction using function

function calculatePrice(price, tax)
{
    return price + (price * tax / 100)
}

console.log(calculatePrice(100, 10))

console.log(calculatePrice(100, 10))

//Abstraction using Class
class BankAccount
{
    #balance = 0;  //# --> private

    getBalance()
    {
        return this.#balance
    }

}

let b1 = new BankAccount()

b1.balance = 10000;

console.log(b1.getBalance())


let username = "admin"
let password = 1234

if(username === "admin" && password === "1234")
{
    console.log("Login Successful")
}

class Login
{
    validateUser(username, password)
    {
        if(username === "admin" && password === "1234")
        {
            console.log("Login Successful")
        }
        else
        {
            console.log("Invalid Credenditals")
        }
    }
}

let login = new Login()
login.validateUser()