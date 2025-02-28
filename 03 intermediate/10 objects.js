var user = {                 //basically objects are like dictionar in python key;value pairs.  //we define by using {}
firtsname:"akash",
lastname:"jain",
role:"admin",
logincount: 32,
facebooksignedin: true
};

console.log(user);

console.log(user.firtsname);    //we acess using keys.

            //OR
console.log(user["lastname"]);   //if we use [] we have to give key in qoutes.(not preffered)



// we can also update values of keys

user.logincount=44;

console.log(user.logincount);


//console.table(user);                           //note- not imp u can use console.table gives output in table form.






//assignment



var iphone = {
    name:"iphone 13",
    year:2022,
    ios: 15,
    price:50000,
    colour:"white",
    variant:"256gb",
    chipset:"a1"
};


console.log(iphone);
console.table(iphone);

