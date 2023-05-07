
// 4-6: Getters and Setters in Typescript


class BankAccount {
    id: number;
    name: string;
   private _balance: number;

    constructor(id: number, name: string, _balance: number){
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }

    // Getters functions 

    get balance():number{
        return this._balance
    }
    
    // getAmout():number{
    //     return this._balance;
    // }

    // =====>  Setter Functions 

    set deposite(amount:number){
        this._balance = this.balance + amount
    }

    // addDeposite(addAmount: number):number{
    //     return this._balance = this._balance + addAmount;
    // }
}

const myAccount = new BankAccount(1, 'Raju', 20);
console.log(myAccount.balance)
myAccount.deposite = 30
console.log(myAccount.balance)

