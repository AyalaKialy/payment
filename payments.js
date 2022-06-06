class Payments{
    paymentsArray = [];

    changeTypeOfPayment(){
        let select = document.getElementById('select');
        let type = document.getElementById("select").options[select.selectedIndex].value;
        if(type =='credit')
            {
                document.getElementById("clearing").style.display = "none";
                document.getElementById("creditCard").style.display = "inline-block";
            }
        else{
            document.getElementById("clearing").style.display = "inline-block";
            document.getElementById("creditCard").style.display = "none";
        }

    }
    pay(){
        let fullName = document.getElementById('fullName').value;
        let phoneNumber = document.getElementById('phoneNumber').value;
        let ID = document.getElementById('ID').value;
        let email = document.getElementById('email').value;
        let date = document.getElementById('date').value;
        let sum = document.getElementById('sum').value;
        let description = document.getElementById('description').value;
        let status = document.getElementById('status').value;
        let user = {
            fullName : fullName,
            phoneNumber : phoneNumber,
            ID : ID,
            email : email
        };
        let select = document.getElementById('select');
        let type = document.getElementById("select").options[select.selectedIndex].value;
        if(type =='credit')
            this.payCredit(date,sum,description,status,user);
        
        else
            this.payClearing(date,sum,description,status,user);
    }
    payCredit(date,sum,description,status,user){
        let lastFourDigits = document.getElementById('lastFourDigits').value;
        let code = document.getElementById('code').value;
        let password = document.getElementById('password').value;
        if(date == "" || sum == "" || description == "" || status == "" || lastFourDigits == ""|| code == "" || password == "")
            alert('pleaese enter all the details of payment!');
        else
            {
                let newPayment = new CreditCardPayment(date,sum,description,status,'creditCard',user,lastFourDigits,code,password);
                this.paymentsArray = [...this.paymentsArray,newPayment];
                alert('the payment was succesful!');
            }
        
    }
    payClearing(date,sum,description,status,user){
        let idOfClearing = document.getElementById('idOfClearing').value;
         if(date == "" || sum == "" || description == "" || status == "" || idOfClearing == "")
            alert('pleaese enter all the details of payment!');
        else
            {
            let newPayment = new ClearingPayment(date,sum,description,status,'clearing',user,idOfClearing);
            this.paymentsArray = [...this.paymentsArray,newPayment];
            alert('the payment was succesful!');
        }
    }
}

payments = new Payments();
