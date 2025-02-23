//create an iseven function 

function isEven(a){
   return a % 2 === 0; 
    
}

function isodd(a){
   return a%2!==0;
}



function TestFunctionAndValue(callback , value){

    return callback(value);

}

console.log(TestFunctionAndValue(isEven, 2));


//this is called call back since we are passing a function as an argument of another function along with the value of the function



 