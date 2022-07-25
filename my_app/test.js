


class Human{
    constructor(Age){
        this.age = Age;
       
    }
    print(){
        console.log(this.Age);
    }

}
class User extends Human{
    constructor(firstName,lastName){
        super(20);
        this.firstName = firstName;
        this.lastName = lastName;
    }
    print(){
        console.log(this.firstName,"",this.lastName);
    }

}
let newUser = new User("John","Doe");
console.log(newUser);

const userr ={
    fName: "Mohi",
    lName: "Doe"
    print(){
        console.log(this.fName,"",this.lName);
    }
}

