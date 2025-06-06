//import User from "./06classjs.js"        //used in react and other frameworks


const User = require("./06classjs.js");     //used to import the export in other file

const akash = new User("akash","akash@gmail.com");     //creating an classObject

console.log(akash.getInfo());

akash.enrollcourse("js");
akash.enrollcourse("python");

console.log(akash.getcourselist());


//if we want to iterate through the array we use this method
let courses = akash.getcourselist();

courses.forEach((c)=>{console.log(c)});


//practice- to count the no of courses
let count = 0;
courses.forEach((c)=>{ count++;})
console.log(count);


//practice 

class Person{
    constructor(name,age){
        this.name =name;
        this.age=age;
    }
    
    info(){
        // return this.name, this.age;    //this wont work as js only returns the last one if , is thr   //so we have to create as an object
        return [this.name, this.age];
    }


}

const anand = new Person("anand",20);
console.log(anand.info());