class Payment{
    #date;
    #sum;
    #description;
    #status;
    #typeOfPayment;
    #user;

    constructor(date, sum, description,status,typeOfPayment,user){
        this.#date = date;
        this.#sum = sum;
        this.#description = description;
        this.#status = status;
        this.#typeOfPayment = typeOfPayment
        this.#user=user;
    }

    set date(date){this.#date=date;}
    get date(){return this.#date;}

    set sum(sum){this.#sum=sum;}
    get sum(){return this.#sum;}

    set description(description) {this.#description = description;}
    get description() {return this.#description;}

    set status(status) {this.#status = status;}
    get status() {return this.#status;}

    set typeOfPayment(typeOfPayment) {this.#typeOfPayment = typeOfPayment;}
    get typeOfPayment() {return this.#typeOfPayment;}

    set user(user) {this.#user = user;}
    get user() {return this.#user;}
}

class CreditCardPayment extends Payment{
    #LastFourDigits;
    #code;
    #password;

    constructor(date,sum,description,status,typeOfPayment,user,lastFourDigits, code, password)
    {
        super(date, sum, description,status,typeOfPayment,user)
        this.#LastFourDigits = lastFourDigits;
        this.#code = code;
        this.#password = password;
    }
    
    set LastFourDigits(LastFourDigits) {this.#LastFourDigits = LastFourDigits;}
    get LastFourDigits() {return this.#LastFourDigits;}

    set code(code) {this.#code = code;}
    get code() {return this.#code;}

    set password(password) {this.#password = password;}
    get password() {return this.#password;}
}

class ClearingPayment extends Payment{
    #id;

    constructor(date, sum, description,status,typeOfPayment,user,id)
    {
        super(date, sum, description,status, typeOfPayment,user )
        this.#id=id;
    }

    set id(id) {this.#id = id;}
    get id() {return this.#id;}

}