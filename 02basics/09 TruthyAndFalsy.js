
//Falsy values - all these value will be considered as flase in a if statemnet

// undefined
// nulll
// 0
// ''
// NaN

//anything aprt from these are truthy values


var user = null;
if(user){
    console.log("Condition is false")
}

var k = "null";                      //truthy values
if(k){
    console.log("Condition is true")
}

var kv = "";
if(kv){
    console.log("Condition is false")
}


//one concept

console.log(2+2); //prints 4

console.log((2 + "2"));    //js coverts 2 into a string an concatinates so 22




var test = "2";

if( test == 2){                   // here the condition is executed beacuse js == only checks the vauge number
    console.log("true");
}



if( test === 2){                   // here the condition is  not executed beacuse js === also checks the data type so this mostly used everywhere
    console.log("false");
}

