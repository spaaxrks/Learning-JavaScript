function init(){
    var firstname="hitesh";
    console.log("i am init");


    function sayFirstname(){
        console.log(firstname);
    }
    
    return sayFirstname;                    //here instead of executing we returning the refrence
}


var value = init();     //here it will execute init() but wont execute saynamefirst as its not called instead it will just return the refrence to value

value();  //the refernce of sayname first is stored in value so when we call value() it executes the refrence

//so basically we can execute just the saynamefrst part whenever we want now by executing value as it will alawys refrence saynamefirst
// and sayname first has alreadt inherited firstnmae from init once init was executed so it will remain inside saynamefirst even after init is closed


//------------------------------------------------------------------------------------


function addition(x){
    return function(y){
        return x+y;
    }
}

var add5= addition(4);  //here when we call addition(4) the anonymous function gets returned to add5 variable but the function will inherit x=4 inisde it and then addition()gets closed

console.log(add5(5)); //here when we call add5(5) the anonymous function refrence which add5 has gets called with 5.the anonymous function already has the value of x which it inherited from addition()

//--------
//u can also call addition like this

console.log( addition(4)(5) );   //here addition of 4 gets called and the returned function gets called with 5

//addition()()()  is called curring