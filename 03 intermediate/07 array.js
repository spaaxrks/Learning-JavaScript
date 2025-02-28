var countries = ["india","usa","japan","Russia"]; //to create an array

                            //or

var states = new Array("rajisthan","delhi","mumbai","Assam"); //indexing starts from 0 to n-1

console.log(states[1]);

console.log(states.length);

states[0] = "punjab";
console.log(states[0]);
// console.log(states.)

var user = ["Hitrsh",3,true];   //mixed data types are allowed in array.
console.log(user)


user.pop();    //pops the last element
// user.pop();

console.log(user)

user.unshift("new value");   // adds values to the front of the array
// console.log(user);

user.shift();  //removes element from front of array.
// console.log(user)



user.push("anwi");     //adds element to the end of the array
console.log(user);


console.log(user.indexOf("Hitrsh"));     //returns the index of the element
console.log(user.indexOf("akash"));     //returns -1


console.log(Array.from("hitesh"));  //converts whtever data type into  a n array  ex- string into array of each char