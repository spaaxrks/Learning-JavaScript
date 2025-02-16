function sayHello(name){
    console.log("hello there");
    console.log("hi,there", name)
    //OR

    console.log(`hi there ${name}, how are u?`);
}



// sayHello;       //only refrences the funvtion and does not run the function

sayHello();     //function call

sayHello("akash");





function namestey(){

    return "hi in India";
}


var greeting = namestey();

console.log(greeting);

//or

console.log(namestey());
