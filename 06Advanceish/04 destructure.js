
const user = ["akash",0,"admin"];

// //now to access each element and assign it to a variable we have to do this

// var name = user[0];
// var role=user[2];
// console.log(role);

// //but this is time consuming to assign variables induvidually


var [name,coursecount,role] = user;    //we can use destructure:for destructuring arrary we use [] and what all variables name we want and then assign it to the array.

console.log (role);


//----------------------------------------------

//destructuring objects

const myuser = {
    name:"akash",
    coursecount:5,
    role:"admin"
};

console.log(myuser.role);    //here while printing we have to refrence the object also along with key to shorten this we can use destructure and assign variables to the keys


var {name,coursecount,role} = myuser;  //for objects we use {} to destructure and also the varaiable names should be same as the keys in the object otherwise we get undefined then assign it to the object
console.log(name);