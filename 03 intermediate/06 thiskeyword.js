//TODO: part 1 of this keyword
 console.log(this);
 //used to find the current execution context in browser(window)

 //if u print this in node it wont have have specific execution AudioContext

 function sayname(){
    var name= "Hitesh";
    console.log(this);
 }
 sayname();
 //here since created a function we created a new execution context so it will return that.