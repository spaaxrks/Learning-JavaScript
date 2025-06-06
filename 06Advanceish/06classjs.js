class User{

    constructor(name,email){          // when we  create a new object using new keyword like const akash = new User("akash","akash@gmail.com") constructor automatically get called
        this.name = name;
        this.email = email;
    }

    courselist = [];                   //inside class no need o declare

    getInfo(){                                                  //inside the class we can directly declare functions like this
        return { name:this.name, email:this.email};             // returning an object
    }

    enrollcourse(name){
        this.courselist.push(name);
    }
    getcourselist(){
        return this.courselist;
    }
}

/*
this is normal way to use the class
const user1 = new User("Akash", "akash@example.com");
const user2 = new User("Anand", "anand@example.com");
console.log(user1.getInfo());
user1.enrollcourse("jsbasics");
console.log(user1.getcourselist());
*/


//but if we wanna use the class from anther file

module.exports = User;                  //exportin the class