//Encapsulation

class BankAccount
{   
    #balance //private variable //5000 //10000
    constructor(amount)
    {
        this.#balance = amount
    }

    deposit(amount)
    {
        if(50000>0)
        {
            this.#balance += amount
        }
    }
    withdraw(amount)
    {
        if(amount<=this.#balance)
        {
            this.#balance -= amount
        }
    }

    getBalance()
    {
        return this.#balance
    }


}

let account = new BankAccount(5000)

account.deposit(5000)
console.log(account.getBalance())

account.withdraw(3000)
console.log(account.getBalance())