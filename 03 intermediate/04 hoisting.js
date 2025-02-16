//watch video for better understanding

//whever we create a variable or something it goes into the global contxt(scope)

//but whenever we create a function js creates anothr block(executionable context(local scope))which gets stacked on top of global context




//hoisting - scanning and bringing functions and variables to the top of thier scope at starting even before reaching those line of code
/*
rules
1.functions declarations are always scanned at starting and hoisted and made available
2.But variables declarations are always scanned at starting and hoisted but made undefined until we reach the part where value is assigned to variable
*/


//example 1


function tipper(a){
    var bill = parseInt(a);
    console .log(bill + 5);
}

tipper("80")



tipperA("80")       //here this will execute since the function will be hoisted at starting itself so the function call can work

function tipperA(a){
    var bill = parseInt(a);
    console .log(bill + 5);
}


//example2

bigtipper("80");                  /*here this wont work since here big tippr is a variable and whnever variable is hoisted its value is marked as undefined 
                                      here we gave an function call for the variable but the hoisted varibale value is undefined until function declaration is reached*/

var bigtipper =function (a){
    var bill = parseInt(a);
    console .log(bill + 10);
}


               
var bigtipperA =function (a){   //this will work since function is declared first so the value gets assigned to the hoisted variable
    var bill = parseInt(a);
    console .log(bill + 10);
}
bigtipperA("80");   


//example3

console.log(name);          //here name wille be hoisted as undefined
var name="akash";


//example 4

console.log(name1);  //here name1 wille be hoisted as undefined
var name1="akash";



function sayname(){         //local scope(excutionable context) so whtever var is declared insde the function can be only printd here
    var name1 = "anand";
    console.log( name1);
}
sayname()

console.log(name1);   //here name1 will be be hoisted then take the value akash since the value inside local scope cannot be used outside



//so the order will be undefined anand  and akash


//example 4

function sayname1(){          //here var name2 gets hoisted to the top of the local scope as undefined until the line is reached
    console.log(name2);  
    var name2 = "asha";
    
}
sayname1()
