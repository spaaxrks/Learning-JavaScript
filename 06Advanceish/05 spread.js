
var value = Math.max(2,3,4,5,6);  //here we can give any number of arguments as we want we achieve this by using rest ie- (...args) as the argument of function max while defining max
console.log(value);


//---------------------------------------------------

function sum1(a,b){
    return a+b;
}

console.log( sum1(4,5)) ;  //this works normally
console.log( sum1(4,5,6) ); //if we have extra argument last 6 will get ignored


//but if we have an array as input
var myA=[5,4];
console.log( sum1(myA) );  //this wont work properly as compiler gets confused


//therefore we have to use spread (...myA) to convert the values inside the array into induvidual values//   //IMP*****//
console.log( sum1(...myA) ); //spreads the array into induvidual values


//--------------------------------------------

function sum2(...args){          //REST operation  //allows us to give any number of arguments we want

    let sum=0;
    for(const arg of args){       //very imp syntax while using ...args
        
        sum = sum + arg;

    }
    return sum;
}

console.log(sum2(2,3,4,5,6,7,8));


//------------------------------------------------------

//if we want multiply the first 2 arguments and then add the rest of the arguments without knowing how much args are there we do it like this
function sumandmul(a,b,...args){     

    let mul=a*b;
    let sum=0;

    for(const arg of args){       //very imp syntax while using ...args
        
        sum = sum + arg;

    }
    return [sum , mul];
}

console.log(sumandmul(2,6,1,1,1));

