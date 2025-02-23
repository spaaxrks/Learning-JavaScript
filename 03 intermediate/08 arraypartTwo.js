// function isEven(element){
//     if(element % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }

// }
   

//or


// function isEven(element){
  
//     return element % 2 == 0;         //it will always be evaluated as true or false only

// }


var isEven = (element) => {             //instead function() we can also =>
    
    return element % 2 == 0; 
}

console.log(isEven(2));




var result1 = [2,3,6,8].every(function (a)       //every method checks a given function with all elements in the array and if any elemnt returns false it return false as a whole and if all elements return true it returns true.
{
     return  a%2 == 0;

});

//or

var result2 = [2,3,6,8].every((a) =>      //every method checks a given function with all elements in the array and if any elemnt returns false it return false as a whole and if all elements return true it returns true.
{
     return  a%2 == 0;

});

//or 

var result3 = [2,3,6,8].every(isEven);  //here isEven is refrencing the function if we give isEven() it gives error since it wont have amy argument inside the brackets

console.log(result1);

console.log(result2);
console.log(result3);


//every() takes a function as an argument so basically it is an example of a callback function also.




var result5 = [2,3,6,8].every((a) => (a % 2 === 0));       //here we can avoid the curly braces and return keyword if we use arrow function to write in 1 line of code
console.log(result5);








