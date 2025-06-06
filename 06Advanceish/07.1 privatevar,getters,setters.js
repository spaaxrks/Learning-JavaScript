//in this we will learn aboutt private variables,getters and setters

class User{

    constructor(name,email){          
        this.name = name;
        this.email = email;
    }

    #courselist = [];                   //we use # to make a variable private so it cannot be accesed directly but through getters only

    getInfo(){                                                  
        return { name:this.name, email:this.email};            
    }

    enrollcourse(name){                     //setter since it it sets some value to the variable 0rarray  //setters will always have a parameter
        this.#courselist.push(name);   //since course lsit is private we have to use # here aslo 
    }
    getcourselist(){                       //getter since it only returns the value of a variable or list or whatever
        return this.#courselist;
    }
}

const user1 = new User("Anand", "anand@example.com");
console.log(user1.getInfo());

user1.enrollcourse("jsbasics");   //calls setter

console.log(user1.getcourselist());    //calls getter

console.log(user1.courselist);  //this returns undefined since courselist is private so we have to use a getter