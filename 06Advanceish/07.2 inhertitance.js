
class User{

    constructor(name,email){          
        this.name = name;
        this.email = email;
    }

    #courselist = [];                   

    getInfo(){                                                  
        return { name:this.name, email:this.email};            
    }

    enrollcourse(name){                     
        this.#courselist.push(name);   
    }
    getcourselist(){                       
        return this.#courselist;
    }

    login(){
        return "user login sucessfull"
    }
}


///subclass

class SubAdmin1 extends User{                       //to create a sub class we use the extends keyword

    getadmininfo(){
        return "i am subadmin";
    }
}


//for main class
const user1 = new User("Anand", "anand@example.com");
user1.enrollcourse("jsbasics"); 


//for subcalss
const admin1 = new SubAdmin1();
console.log(admin1.getadmininfo())
console.log(admin1.login());      // this works since subclass inherts all the functions and features of parent class

console.log(admin1.getInfo());  //this returns the object but the values inside will be undefined since the values wonth be inherited directly of the parent class
                                //we need a contructor for the child class or inherit the constructor of parent class in child class using super and then assign values to the child class constrcutor




class SubAdmin2 extends User{                       //to create a sub class we use the extends keyword


    constructor(name,email){            
        super(name,email);                      //this helps u to call the constructor of the parent class in child class 
                                                //When a child class (SubAdmin2) inherits from a parent class (User), the constructor of the parent must be called using super() before you use this in the child.
   }

    getadmininfo(){
        return "i am admin";
    }
}

const admin2 = new SubAdmin2("asha","asha@gmail.com");
console.log(admin2.getInfo());                              //now it works because the constructor of parent is inherited so we can assign name and email for subAdmin2



/*
**
note-if we want any function in the parent class to not be accessable by subclass we have to use static keyword while defining function

eg- static login(){
        return "user login sucessfull"
    }

    now if we try to access this thorugh child class it returns error.
**

*/


class SubAdmin3 extends User{                       

    login(){                                    //we crreate login for subadmin3 class also
        return "admin login successful"
    }
}

const admin3 = new SubAdmin3();

console.log(admin3.login());    //now we have (2 login functions) (1 in user class) and (1 in subadmin3 class) ,js will always choose login function from admin3 only instead of user 
